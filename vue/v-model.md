## vue 中 v-model 的实现

v-model 其实是 vue 中的语法糖，在此我们来实现这个语法糖，此例子使用 vue3 构建

#### 例一

要绑定的根组件 html：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/vue@next"></script>
    <title>v-model 语法糖</title>
  </head>

  <body>
    <div id="v-model-basic" class="demo">
      <input v-model="message" placeholder="v-model用法" />
      <p>Message is: {{ message }}</p>
      <input :value="message1" @input="handleInput" placeholder="v-model的原理" />
      <p>Message is: {{ message1 }}</p>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

js 文件

```javascript
Vue.createApp({
  data() {
    return {
      message: '',
      message1: ''
    }
  },
  methods: {
    handleInput(event) {
      this.message1 = event.target.value
    }
  }
}).mount('#v-model-basic')
```

#### 例二

要绑定的根组件 html：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/vue@next"></script>
    <title>v-model 语法糖</title>
  </head>

  <body>
    <div id="app" class="demo">
      <p>First name: {{ firstName }}</p>
      <p>Last name: {{ lastName }}</p>
      <user-name @update:first-name="updateFirst" :first-name="firstName" v-model:last-name="lastName"></user-name>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

js 文件

```javascript
const UserName = {
  props: {
    firstName: String,
    lastName: String
  },
  template: `
<input 
  type="text"
  :value="firstName"
  @input="emitFirst">

<input
  type="text"
  :value="lastName"
  @input="$emit('update:lastName', $event.target.value)">
`,
  methods: {
    emitFirst(e) {
      this.$emit('update:firstName', e.target.value)
    }
  }
}

const HelloVueApp = {
  components: {
    UserName
  },
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  methods: {
    updateFirst(value) {
      this.firstName = value
    }
  }
}

Vue.createApp(HelloVueApp).mount('#app')
```

## v-model 修饰符之 number

```html
<input v-model.number="age" type="text" />
```
一个比较鸡肋的修饰符，作用是将输入的值转换为Number类型，如果转换不了就返回原输入值。
