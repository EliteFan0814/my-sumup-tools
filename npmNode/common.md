## MSBUILD : error MSB4132: 无法识别工具版本“2.0”。可用的工具版本为 "4.0"

win10 64 位系统, nodejs 使用 npm install 出现报
错`MSBUILD : error MSB4132: 无法识别工具版本“2.0”。可用的工具版本为 "4.0"`。

1. **问题原因**：  
   项目依赖中，node-gyp 调用 MSBuild 工具进行组件编译，找不到 MSBuild2.0，而系统里只有 MSBuild4.0。
2. **解决方法**：  
   a. 在项目内重新执行 `npm install --msvs_version 2015` 进行安装项目依赖  
   b. 你也可以执行`npm config set msvs_version 2015 --global`进行全局设置，就不需要每次`npm install`时都指定
   msvs_version 2015

#### 参考博文

> [参考博文 1-页面内搜索 mousetraps ](https://github.com/nodejs/node-gyp/issues/629)

> [参考博文 2](https://www.cnblogs.com/iTlijun/p/8193588.html)

## vite 相关

如下使用`npm create vite@latest`构建项目，在 windows 环境下不能使用上下箭头选择

```shell
fan@DESKTOP-F8A5QC7 MINGW64 /f/projectsMy
$ npm create vite@latest
? Project name: » vite-projectvitedemo
√ Project name: ... vitedemo
? Select a framework: » - Use arrow-keys. Return to submit.
>   vanilla
    vue
    react
    preact
    lit
    svelte

```

改换成`winpty npm.cmd create vite@latest`就可以了

```shell
fan@DESKTOP-F8A5QC7 MINGW64 /f/projectsMy
$ winpty npm.cmd create vite@latest
√ Project name: ... vitedemo
? Select a framework: » - Use arrow-keys. Return to submit.
>   vanilla
    vue
    react
    preact
    lit
    svelte

```

## 老旧项目配置 node-sass 淘宝镜像仓库

```shell
npm config set sass_binary_site https://npmmirror.com/mirrors/node-sass
npm config set registry https://registry.npmmirror.com
```

## 老旧项目安装 chromedriver 报错

报错如下：

```shell
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! chromedriver@2.46.0 install: `node install.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the chromedriver@2.46.0 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

原因是 chromedriver 的部分文件被国内网络给墙掉了，执行以下命令，解决方法：

```shell
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
```
