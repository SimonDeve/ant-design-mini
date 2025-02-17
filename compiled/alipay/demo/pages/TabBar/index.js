Page({
  data: {
    tabs: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
      },
    ],

    tabsBadge: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
        badge: {},
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
        badge: { type: 'number', text: 9999 },
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
      },
    ],

    tabsCount6: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
      },
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
      },
    ],

    current: 0,
  },
  handleChange(index) {
    this.setData({ current: index });
  },
});
