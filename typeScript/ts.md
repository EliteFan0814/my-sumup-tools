## ts 接口

接口声明是命名对象类型的另一种方式，是一系列抽象方法的声明，接口定义的方法需要具体的类来实现  
接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。

```typescript
interface IPerson {
  readonly id: number // 只读属性
  firstName: string // 必传属性
  lastName: string
  age?: number // 可选属性
  talk: () => void
  run: string | string[] | (() => string) // 联合类型
  [propName: string]: any // 任意属性
}

const person: IPerson = {
  id: 1,
  firstName: '屁虫',
  lastName: '放',
  run: '我会跑步',
  talk() {
    console.log(`我的名字是${this.lastName}${this.firstName}`)
  },
  dance() {
    console.log('我会跳舞')
  }
}
person.talk()
```

**赋值的时候，变量的形状必须和接口的形状保持一致，属性不能多也不能少，不然会编译时报错**  
**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**

## @types

它指的是 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)，这个仓库中记录了 90% 的顶级 JavaScript 库  
例如，jQuery 是用 js 写的，不支持 Ts 类型检查，在项目中，你可以安装`npm install -D @typesjquery`来让 jQuery 支持 Ts 类型检查。

@types 的本质是用来存放类型声明文件（\*.d.ts）的库，常用来为 **非天生支持 Ts** 的库提供类型检查支持。
