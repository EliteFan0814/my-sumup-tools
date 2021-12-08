## MSBUILD : error MSB4132: 无法识别工具版本“2.0”。可用的工具版本为 "4.0"

win10 64 位系统, nodejs 使用 npm install 出现报
错`MSBUILD : error MSB4132: 无法识别工具版本“2.0”。可用的工具版本为 "4.0"`。

1. **问题原因**：  
   项目依赖中，node-gyp 调用 MSBuild 工具进行组件编译，找不到 MSBuild2.0，而系统里只有 MSBuild4.0。
2. **解决方法**：  
   a. 在项目内重新执行 `npm install --msvs_version 2015` 进行安装项目依赖  
   b. 你也可以执行`npm config set msvs_version 2015 --global`进行全局设置，就不需要每次`npm install`时都指定
   msvs_version 2015

## 参考博文

> [页面内搜索 mousetraps 提供的解决方法](https://github.com/nodejs/node-gyp/issues/629)
