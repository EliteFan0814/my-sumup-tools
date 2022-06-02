## cors 跨域请求 全称"跨域资源共享"（Cross-origin resource sharing）

- 普通的 AJAX 请求只能同源使用，cors 允许浏览器跨域发出 XMLHttpRequest 请求
- cors 需要浏览器和服务器同时支持
- 整个 cors 通信都由浏览器自动完成，对于开发者来说，CORS 通信与同源的 AJAX 通信没有差别
- 实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。

### cors 分为简单请求和非简单请求

请求头里的 <font color="red">**Origin**</font> 表示 <font color="red">**当前浏览器地址栏访问的域名**</font>  
请求头里的 <font color="red">**Host**</font> 表示 <font color="red">**当前发送的 XMLHttpRequest 请求的域名地址**</font>

![典型的跨域请求头.png](https://s2.loli.net/2022/06/02/WkNfnwF71hVzype.png)

![典型的跨域响应头.png](https://s2.loli.net/2022/06/02/F9TgwpdHRo7EPK4.png)

- 简单请求  
  发出 cors 请求 --》头信息增加 Origin 字段 --》服务器判断 Origin 值是否在许可范围  
  不在许可范围 --》返回不包含 Access-Control-Allow-Origin 字段的正常 Http 响应  
  在许可范围 --》

![跨域请求.png](https://s2.loli.net/2022/02/17/xF4DmVhKZI9ELaj.png)

![非跨域请求.png](https://s2.loli.net/2022/02/17/TLEhJ1H3fDnP2x6.png)
