//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goods: [],
    bads: [],
  },
  lucky: function() {
    wx.request({
      url: 'https://www.lorryzz.cn/lunch/random',
      success: (res) => {
        this.setData({
          goods: res.data.goods,
          bads: res.data.bads,
        })
      }
    })
  },
  fetchData: function() {
    wx.request({
      url: 'https://www.lorryzz.cn/lunch/date',
      success: (res) => {
        this.setData({
          goods: res.data.goods,
          bads: res.data.bads,
        })
      }
    })
  },
  onLoad: function () {
    this.fetchData()
  }
})