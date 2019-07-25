// pages/news/newslist.js
let newsData = require("../../data.js");
const app = getApp()
console.log(newsData.salonNews)
Page({

  /*页面的初始数据*/
  data: {
    showNewsData: {}
  },

  /*生命周期函数--监听页面加载*/
  onLoad: function () {
    //沙龙新闻字数截取
    console.log(newsData.salonNews)
    let showNewsData = newsData.salonNews.splice(0, 3);
    showNewsData.forEach((e, i) => {
      console.log(e,i)
      e.newsTxt = e.newsContent.split("", 16).join("");
      
    })
    this.setData({
      showNewsData: showNewsData
    })
  },

  /*生命周期函数--监听页面初次渲染完成*/
  onReady: function () {

  },

  /*生命周期函数--监听页面显示*/
  onShow: function () {

  },

  /*生命周期函数--监听页面隐藏*/
  onHide: function () {

  },

  /*生命周期函数--监听页面卸载*/
  onUnload: function () {

  },

  /*页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {

  },

  /*页面上拉触底事件的处理函数*/
  onReachBottom: function () {

  },

  /*用户点击右上角分享*/
  onShareAppMessage: function () {

  }
})