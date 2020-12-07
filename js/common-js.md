## h5 页面嵌入 QQ 客服代码

```markup
<a href="mqqwpa://im/chat?chat_type=wpa&uin={{yourQQNumber}}&version=1&src_type=web&web_src=oicqzone.com"></a>
```

## 将一个数组分为多个数组

示例：[1,2,3,4,5,6,7,8,9,10] 转换为 [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]]

```javascript
const sliceArray = function (targetArray, number) {
  const page = Math.ceil(targetArray.length / number)
  const returnArr = []
  for (let i = 0; i < page; i++) {
    returnArr[i] = targetArray.slice(i * number, (i + 1) * number)
  }
  return returnArr
}
```

## 限制只能传入数字

```javascript
// valStr 确保是一个字符串类型
const limitToNumberStr = function (valStr) {
  let tempValue = valStr.toString()
  return tempValue
    .replace(/[^0-9.]/g, '')
    .replace('.', '#*')
    .replace(/\./g, '')
    .replace('#*', '.')
}
```

## 将对象转换为数组

### 方式 1

示例：{ userName : 'elite' , local : 'china' } 转换为 [{ name : 'userName' , value : 'elite' } , { name : 'local' , value : 'china' }]

```javascript
const objTransToArray = function (obj) {
  let arr = []
  Object.keys(obj).forEach((itemKey) => {
    let o = {}
    o.name = itemKey
    o.value = obj[itemKey]
    arr.push(o)
  })
  return arr
}
```

### 方式 2

示例：{ userName : 'elite' , local : 'china' } 转换为 [{ userName : 'elite' } , { local : 'china' }]

```javascript
const objTransToArray = function (obj) {
  let arr = []
  Object.keys(obj).forEach((itemKey) => {
    let o = {}
    o[itemKey] = obj[itemKey]
    arr.push(o)
  })
  return arr
}
```

## 判断数据类型

### 方法 1 返回值为 Boolean 值

```javascript
// yourData 传入的数据
// dataType 要验证的数据类型，例如 String Number
const checkType = function (yourData, dataType) {
  const type = Object.prototype.toString.call(yourData).slice(8, -1)
  return type === dataType
}
```

### 方法 2 返回值为数据类型

```javascript
const checkdataType = function (yourData) {
  const type = Object.prototype.toString.call(yourData).slice(8, -1)
  switch (type) {
    case 'Number':
      return 'Number'
    case 'String':
      return 'String'
    case 'Boolean':
      return 'Boolean'
    case 'Null':
      return 'Null'
    case 'Undefined':
      return 'Undefined'
    case 'Function':
      return 'Function'
    case 'Array':
      return 'Array'
    case 'Object':
      return 'Object'
    case 'Date':
      return 'Date'
    case 'RegExp':
      return 'RegExp'
    case 'Error':
      return 'Error'
    case 'Symbol':
      return 'Symbol'
    case 'Promise':
      return 'Promise'
    case 'Set':
      return 'Set'
    default:
      return '未知类型：' + type
  }
}
```
## 巧用window.open
不想使用 a 标签破环样式结构的话，可以使用 window.open 实现部分常用功能  
`window.open(URL,name,specs,replace)`
```js
//  在当前页面显示拨打电话
window.open('tel:15000000000','_self')
```