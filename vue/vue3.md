## 响应性 api ref 的使用

```javascript
<script setup lang="ts">
import { ref,onMounted } from 'vue'
// 若模板文件里某个元素或子组件定义了 ref="fpcref"，则这里定义的 fpcref 指的就是这个元素的dom对象或组件的实例对象 ，不管ref里是否传值
const fpcref = ref(); // 或者 const fpcref = ref('这是一个字符串');
const nameRef = ref('范跑跑')
onMounted(() => {
  console.log('fpcref.value', fpcref.value);
});
</script>
<template>
  <div ref="fpcref">{{nameRef}}</div>
</template>
```
