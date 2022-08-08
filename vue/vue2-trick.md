## v-for 可以使用对象

**在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致。**

```html
<!-- name:属性名 value:属性值 index:索引 -->
<div v-for="(value, name, index) in object">{{ index }}. {{ name }}: {{ value }}</div>
<script>
  new Vue({
    el: '#v-for-object',
    data: {
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  })
</script>
```

## v-bind 直接绑定箭头函数

有些组件库内置的方法只能接收一个参数，可以使用箭头函数来传递更多参数

```html
<!-- 普通方式 -->
<el-input v-model="number" placeholder="请输入数量" @input="handleInput" clearable></el-input>

<!-- 箭头函数方式 -->
<el-input
  v-model="number"
  placeholder="请输入数量"
  @input="(value)=>{limitToNumberStr(value,'number')}"
  clearable
></el-input>
```

这里 handleInput 只能接收一个参数  
箭头函数方式则可以传递更多参数

## jsconfig.json

vscode 使用 vetur 插件会弹出不存在 tsconfig.json 或者 jsconfig.json 文件，前者针对 Ts 项目，后者针对普通 js 项目，在项目
根目录新建 jsconfig.json 文件就行  
jsconfig.json 文件内容结构如下：

```javascripton
{
  "compilerOptions": {
    "target": "es2015",
    "module": "esnext",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.vue", "src/**/*.js"]
}
```

## 根据不同环境切换地址

```javascript
// environment.js
const isDev = process.env.NODE_ENV == 'development'
export default {
  excelPath: isDev ? 'http://local.host.com/' : 'http://eliteFan.com/',
  downloadPath: isDev ? 'http://local.host.com/' : 'http://eliteFan.com/'
}
```

## eventBus

```javascript
//  eventBus.js
import Vue from 'vue'

export default new Vue()
```

```javascript
// component1.vue
import eventBus from './eventBus'

watch:{
  list(newvalue,oldvalue){
    eventBus.$emit('my-event',{name:'event'})
  }
}
```

```javascript
// component2.vue
import eventBus from './eventBus'

created(){
  eventBus.$on('my-event',(msg)=>{})
}
```

## 组件 props 传对象

给定对象：

```javascript
post:{
  id:1,
  title:'fpx',
  name:'fpc'
}
```

则模板：  
`<my-componment v-bind="post"></my-componment>`  
 等价于：  
`<my-componment :id="post.id" :title="post.title" :name="post.name"></my-componment>`