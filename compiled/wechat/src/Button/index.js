var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ButtonDefaultProps } from './props';
import '../_util/assert-component2';
Component({
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
    },
    props: ButtonDefaultProps,
    methods: __assign({
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
    }),
});
