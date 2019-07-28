// pages/news/newslist.js
//引用并定义第三方数据
let newsData = require("../../data.js");
//获取并定义需要的数据
let showNewsData = newsData.salonNews;
const app = getApp()
const query = wx.createSelectorQuery()
Page({

  /*页面的初始数据*/
  data: {
    showData: {},
    n: 0,
    addMoreTxt: "点击加载更多"
  },

  addMore: function () {
    
    let pageTotal = Math.ceil(showNewsData.length / 10)
    //console.log(pageNum , pageTotal)
    let addData = showNewsData.slice(10 * (this.data.n + 1), 10 * (this.data.n + 1 + 1))
    if (addData.length <= 10){
      let pageNum = this.data.n + 1;
      let showNData = this.data.showData.concat(addData)
      this.setData({
        n: pageNum,
        showData: showNData
      })
    } 
    if (addData.length < 10) {
      this.setData({
        addMoreTxt: "无更多内容"
      })
    }
    
  },

  /*生命周期函数--监听页面加载*/
  onLoad: function () {
    //沙龙新闻字数截取
    showNewsData.forEach((e, i) => {
      e.newsTxt = e.newsContent.split("", 16).join("");
    })
    this.setData({
      showData: showNewsData.slice(0,10)
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
    console.log("下拉中")
  },

  /*页面上拉触底事件的处理函数*/
  onReachBottom: function () {
    
  },

  /*用户点击右上角分享*/
  onShareAppMessage: function () {

  }
})