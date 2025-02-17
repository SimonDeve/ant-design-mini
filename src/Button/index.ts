/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ButtonDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import '../_util/assert-component2';

Component({
  /// #if WECHAT
  properties: {
    style: String,
    type: String,
    disabled: Boolean,
    activeClassName: String,
    subText: String,
    inline: Boolean,
    size: String,
    icon: String,
    loading: Boolean,
    danger: Boolean,
    formType: String,
    publicId: String,
    openType: String,
    scope: String,
  },
  options: {
    styleIsolation: 'shared',
  } as unknown,
  /// #endif
  props: ButtonDefaultProps,
  methods: {
    /// #if ALIPAY
    onTap(e) {
      const { onTap, disabled, loading } = this.props;
      if (onTap && !disabled && !loading) {
        const event = fmtEvent(this.props, e);
        return onTap(event);
      }
    },
    catchTap(e) {
      const { catchTap, disabled, loading } = this.props;
      if (catchTap && !disabled && !loading) {
        const event = fmtEvent(this.props, e);
        return catchTap(event);
      }
    },
    onGetAuthorize(e) {
      if (this.props.onGetAuthorize) {
        this.props.onGetAuthorize(fmtEvent(this.props, e));
      }
    },
    onFollowLifestyle(e) {
      if (this.props.onFollowLifestyle) {
        this.props.onFollowLifestyle(fmtEvent(this.props, e));
      }
    },
    onError(e) {
      if (this.props.onError) {
        this.props.onError(fmtEvent(this.props, e));
      }
    },
    onGetUserInfo(e) {
      if (this.props.onGetUserInfo) {
        this.props.onGetUserInfo(fmtEvent(this.props, e));
      }
    },
    onGetPhoneNumber(e) {
      if (this.props.onGetPhoneNumber) {
        this.props.onGetPhoneNumber(fmtEvent(this.props, e));
      }
    },
    /// #endif
    /// #if WECHAT
    ...{
      onGetUserInfo: function (event) {
        this.triggerEvent('getuserinfo', event.detail);
      },
      onContact: function (event) {
        this.triggerEvent('contact', event.detail);
      },
      onGetPhoneNumber: function (event) {
        this.triggerEvent('getphonenumber', event.detail);
      },
      onGetRealTimePhoneNumber: function (event) {
        this.triggerEvent('getrealtimephonenumber', event.detail);
      },
      onError: function (event) {
        this.triggerEvent('error', event.detail);
      },
      onLaunchApp: function (event) {
        this.triggerEvent('launchapp', event.detail);
      },
      onOpenSetting: function (event) {
        this.triggerEvent('opensetting', event.detail);
      },
      onAgreePrivacyAuthorization: function (event) {
        this.triggerEvent('agreeprivacyauthorization', event.detail);
      },
      onChooseAvatar: function (event) {
        this.triggerEvent('chooseavatar', event.detail);
      },
    },
    /// #endif
  },
});
