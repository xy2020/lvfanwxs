// pages/mypage/user.js
// user.js
var app = getApp()
Page({
  data: {
    //userInfo: {},
    showBadge: false,
    meList: [
      {
        text: '使用说明',
        icon: '../../images/shuoming.png',
        url: '../tips/tips'
      },
      {
        text: '关于绿帆',
        icon: '../../images/guanyu.png',
        url: '../about/about'
      },
      {
        text: '反馈',
        icon: '../../images/fankui.png',
        url: '../feedback/index'
      },
    ]
  },
/** 
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }*/
})
