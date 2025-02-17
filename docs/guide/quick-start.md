---
toc: false
---

## 快速开始

这里介绍如何在原生支付宝小程序中安装使用 Ant Design Mini 组件库。

### 1. 安装依赖

```
$ npm i antd-mini --save
```

<br>

### 2.开启 component2

从 2.11.0 版本起，需要小程序开启 component2，开启后小程序自定义组件会使用新的生命周期运行模式。

开启方法：在 IDE 中的 详情 > 项目配置 中，勾选 启用 component2 编译。

详情可以参考 [升级到 v2](./migration-v2.md)

### 3.在页面 json 文件中引入组件

```json
{
  "usingComponents": {
    "ant-button": "antd-mini/es/Button/index"
  }
}
```

<br>

### 4. 在 axml 文件中使用

```html
<ant-button>我是一个按钮</ant-button>
```

## 查看示例

<code src='pages/Button/index'></code>
