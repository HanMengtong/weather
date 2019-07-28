# WEATHER

气候花店小程序记录

## 首页中包括图片幻灯片、最近新闻展示、热门花卉展示、花卉小知识

### swiper处理幻灯片展示

```
<swiper class='indexBanner' indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
    <block wx:for="{{indexBanner}}" wx:key="{{item.index}}">
      <swiper-item class="swiperItem">
        <image src="{{item}}" style="width:100%"/>
      </swiper-item>
    </block>
  </swiper>
```

常用属性：

	1.indicator-dots：是否显示面板指示点
	
	2.autoplay：是否自动切换
	
	3.interval：自动切换时间间隔
	
	4.duration：滑动动画时长
		
swiper-item仅可放置在swiper组件中，并且宽高自动设置为100%。

### wx:for循环数据

```
<block wx:for="{{showNewsData}}" wx:key="{{item.index}}">
	<navigator url="../news/news?title={{item.tip}}" class="newsTxt">【{{item.newsTitle}}】{{item.newsTxt}}...</navigator>
</block>
```

在wx:for使用中，切记要标注**wx:key**

通过navigator完成页面跳转

常用属性：

	1.url：当前小程序内的跳转链接
	
	2.open-type：跳转方式
		
其他属性参考文档 [官方文档-navigator](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)

### 按需加载

```
<text class="clickMore" bindtap="addMore">{{addMoreTxt}}</text>
```

```
data: {
	showData: {},
	n: 0,
	addMoreTxt: "点击加载更多"
},
```

```
addMore: function () {
    let addData = showNewsData.slice(10 * (this.data.n + 1), 10 * (this.data.n + 1 + 1)) //需要新添加的数据
    if (addData.length <= 10){
      let pageNum = this.data.n + 1; //对于页数的标示加1 
      let showNData = this.data.showData.concat(addData) //数据合并
      this.setData({
        n: pageNum,
        showData: showNData
      })
    } 
    if (addData.length < 10) { //当添加的数据不够一页的时候，查看更多按钮内容发生改变
      this.setData({
        addMoreTxt: "无更多内容"
      })
    }
  },

```

利用 **slice()** 方法完成按需获取数据，并且通过 **concat()** 将原有数据与新数据合并展示。

### vh的使用

在wxss文件中，获取屏幕的宽高，可以有以下两种方式。

方法一：

```
onLoad: function () {
   this.setData({
     height: wx.getSystemInfoSync().windowHeight,
     width: wx.getSystemInfoSync().windowWidth
   })
 }
```

方法二：

CSS3引入的"vw"和"vh"基于宽度/高度相对于窗口大小 
"vw" = "view width"  "vh" = "view height"

```
.container{
   height: 100vh;
   width: 100vw;
}
```
