# WEATHER
a miniprogram of weather flower shop

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
