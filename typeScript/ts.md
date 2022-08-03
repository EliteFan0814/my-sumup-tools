## @types

它指的是 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)，这个仓库中记录了 90% 的顶级 JavaScript 库  
例如，jQuery 是用 js 写的，不支持 Ts 类型检查，在项目中，你可以安装`npm install -D @typesjquery`来让 jQuery 支持 Ts 类型检查。

@types 的本质是用来存放类型声明文件（\*.d.ts）的库，常用来为 **非天生支持 Ts** 的库提供类型检查支持。
