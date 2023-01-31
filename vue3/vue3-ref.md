## ref 的使用

### 用于创建可以使用任何值类型的响应式对象

```javascript
<script setup>
import { ref } from 'vue'
const count = ref(0)
const handleCount = function(){
  count.value++
}
</script>

<template>
  <span>{{count}}</span>
  <button @click="handleCount">加一</button>
</template>
```

### 用于做模板引用

1. 使用选项式 api

```javascript
<script>
export default {
  mounted() {
    this.$refs.inputRef.focus()
  }
}
</script>

<template>
  <input ref="inputRef" />
</template>
```

2. 使用组合式 api

```javascript
<script setup>
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名，这里的 inputRef 指的就是模板中的dom元素 input
const inputRef = ref(null)

onMounted(() => {
  inputRef.value.focus()
})
</script>

<template>
  <input ref="inputRef" />
</template>
```
