let newsData = require("../../data.js");
console.log(newsData)
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    timeTxt:"",
    indexBanner: ["../../img/indexBanner1.jpeg", "../../img/indexBanner2.jpeg","../../img/indexBanner3.jpeg"],
    bannerSrc: "",
    indexNum: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    newsData: newsData.salonNews,
    showNewsData: {}
  },
  //事件处理函数
  bindViewTap: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '../center/center'
    })
  },
  onLoad: function () {
    //获取首页时间
    let now = new Date();
    let hour = now.getHours();//得到小时
    console.log(hour)
    if(0 <= hour <= 6){
      this.setData({
        timeTxt: "凌晨"
      })
    }
    if (6 <= hour <= 12) {
      this.setData({
        timeTxt: "上午"
      })
    }
    if (12 <= hour <= 18) {
      this.setData({
        timeTxt: "下午"
      })
    }
    if (18 <= hour <= 24) {
      this.setData({
        timeTxt: "晚上"
      })
    }
    //获取头像、昵称
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    //沙龙新闻字数截取
    let showNewsData = newsData.salonNews.splice(0,3);
    console.log(showNewsData)
    showNewsData.forEach((e,i)=>{
      e.newsTxt = e.newsContent.split("", 16).join("");
       this.setData({
         showNewsData: showNewsData
       })
    })
    
  },
  onShow:function(){
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
   
  }
  
})
