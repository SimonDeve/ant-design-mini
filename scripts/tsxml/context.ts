import * as types from '@babel/types';
import { codeFrameColumns } from '@babel/code-frame';
import generate from '@babel/generator';
import prettier from 'prettier';
import { h, toHtml } from './h';
import { PlatformConfig } from './platform';

export interface ITransformContext<T extends types.Node = types.Node> {
  node: T;
  extends<V extends types.Node>(node: V): ITransformContext<V>;
  throw(node: types.Node, message?: string): TransformError;
  h(tagName: string, props: unknown, ...children: unknown[]): unknown;
  if(): string;
  else(): string;
  for(): string;
  forItem(): string;
  forKey(): string;
  forIndex(): string;
  readonly platform: PlatformConfig;
  getAttrName(tagName: string, name: string): string;
  getTagName(tagName: string): string;
  toAxmlExpression(): string;
}

export class TransformError extends Error {
  constructor(public ctx: string, message?: string) {
    super(message ?? 'transform Error');
  }
}

export class TransformContext<T extends types.Node = types.Node>
  implements ITransformContext<T>
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async toHtml(vnode: any): Promise<string> {
    const html = toHtml(vnode);
    const res = TransformContext.formatAxml(html);
    return res;
  }

  static formatAxml(axml: string) {
    return prettier.format(axml, {
      parser: 'html',
      printWidth: 80,
      tabWidth: 2,
      bracketSameLine: true,
      bracketSpacing: true,
      singleAttributePerLine: true,
      htmlWhitespaceSensitivity: 'ignore',
    });
  }

  static create<T extends types.Node = types.Node>(
    node: T,
    config: PlatformConfig,
    code: string
  ): ITransformContext<T> {
    return new TransformContext(node, config, code);
  }

  get node(): T {
    return this._node;
  }

  public get platform(): PlatformConfig {
    return this.config;
  }

  private constructor(
    private _node: T,
    private config: PlatformConfig,
    private code: string
  ) {}

  extends<T extends types.Node = types.Node>(child: T): ITransformContext<T> {
    return new TransformContext<T>(child, this.config, this.code);
  }

  throw(child: types.Node, message?: string): TransformError {
    const errorCtx = new TransformContext(child, this.config, this.code);
    return new TransformError(errorCtx.getFrame(), message);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h(tagName: string, props: any, ...children: any[]): any {
    return h(tagName, props, ...children);
  }

  toAxmlExpression(): string {
    return `{{ ${generate(this.node).code} }}`;
  }

  getAttrName(tagName: string, name: string): string {
    if (this.platform.basicEvent[name]) {
      return this.platform.basicEvent[name];
    }
    return name;
  }

  getTagName(tagName: string): string {
    return tagName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  if() {
    return this.config.if;
  }
  for() {
    return this.config.for;
  }
  else(): string {
    return this.config.else;
  }
  forIndex(): string {
    return this.config.forIndex;
  }
  forItem(): string {
    return this.config.forItem;
  }
  forKey(): string {
    return this.config.forKey;
  }
  getFrame() {
    const result = codeFrameColumns(this.code, this._node.loc, {});
    return result;
  }
}
