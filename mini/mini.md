## vscode 中.scss 实时转换为.wxss / vscode 中使用 scss

1. 首先在 vscode 中安装插件 easySass
2. 在 vscode 首选项中找到 settings.json 配置文件
3. 在 settings.json 配置文件中添加如下代码

   ```javascript
   {
   "easysass.formats": [
    {
      "format": "expanded", // 转化样式：没有缩进的、扩展的css代码
      "extension": ".wxss" // sass/scss文件要转化的后缀名
    }
   ]
   }
   ```

4. 同时也支持转化为.css .min.css 等格式，只需再次添加配置就行：

   ```javascript
   {
   "easysass.formats": [
   // ~~~省略~~~
    {
      "format": "expanded",
      "extension": ".css"
    },
    {
      "format": "compressed",
      "extension": ".min.css"
    }
   ]
   }
   ```

5. 顺便在.gitignore 中也可添加忽略 sass 缓存文件的配置

   ```text
   .sass-cache/
   *.css.map
   *.sass.map
   *.scss.map
   *.css
   ```

## 小程序中 px 和 rpx 互相转化

```text
px = rpx / 750 * wx.getSystemInfoSync().windowWidth
rpx = px * 750 / wx.getSystemInfoSync().windowWidth
```

注：  
wx.getSystemInfoSync().windowWidth 单位为 px  
[小程序获取系统信息](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html)

## 顶部安全距离

有时候自定义小程序导航条会遇到刘海/非刘海手机显示不一的问题  
先来看一下微信官方设计稿中的距离：  
![胶囊按钮距离](https://i.loli.net/2020/12/07/8Bpvt1iVZ6dHKG3.png)  
可以得出：  
胶囊按钮顶部边界距离手机状态栏底部边界的距离是 6px  
胶囊按钮右部边界距离手机屏幕右侧留白安全距离是 6px

```js
// 小程序中的 app.js 中定义 capsuleToTop
globalData: {
  //胶囊按钮距离顶部距离= 手机状态栏的高度(px)+6px
  capsuleToTop: wx.getSystemInfoSync()['statusBarHeight'] + 6
}
```

这样在单个 page 文件中就能动态获取胶囊按钮距离手机屏幕顶部的距离了。根据这个距离来自定义小程序导航条：
![胶囊按钮距离](https://i.loli.net/2020/12/07/YlXshuBEreo9FDP.png)

```html
<view class="wrapper" style="padding-top:{{capsuleToTop}}px;"></view>
<!-- 小程序对应的js文件中取出 app.js 中的 capsuleToTop-->
<script>
  Page({
    data: {
      capsuleToTop: app.globalData.capsuleToTop
    }
  })
</script>
```
