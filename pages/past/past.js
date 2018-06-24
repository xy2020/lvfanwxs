// pages/past/past.js
Page({
  data: {
  },
  confirm: function () {
    wx.navigateBack({
      url: '../index',
    })
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})      