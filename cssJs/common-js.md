## h5 页面嵌入 QQ 客服代码

```markup
<a href="mqqwpa://im/chat?chat_type=wpa&uin={{yourQQNumber}}&version=1&src_type=web&web_src=oicqzone.com"></a>
```

## 将一个数组分为多个数组

示例：[1,2,3,4,5,6,7,8,9,10] 转换为 [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]]

```javascript
const sliceArray = function (arr, num) {
  const result = [];
  for (let i = 0; i < arr.length; i += num) {
    result.push(arr.slice(i, i + num));
  }
  return result;
};
```

## 限制只能传入数字

```javascript
// valStr 确保是一个字符串类型
const limitToNumberStr = function (valStr) {
  let tempValue = valStr.toString();
  return tempValue
    .replace(/[^0-9.]/g, "")
    .replace(".", "#*")
    .replace(/\./g, "")
    .replace("#*", ".");
};
```

## 将对象转换为数组

### 方式 1

示例：{ userName : 'elite' , local : 'china' } 转换为 [{ name : 'userName' , value : 'elite' } , { name : 'local' ,
value : 'china' }]

```javascript
const objTransToArray = function (obj) {
  let arr = [];
  Object.keys(obj).forEach((itemKey) => {
    let o = {};
    o.name = itemKey;
    o.value = obj[itemKey];
    arr.push(o);
  });
  return arr;
};
```

### 方式 2

示例：{ userName : 'elite' , local : 'china' } 转换为 [{ userName : 'elite' } , { local : 'china' }]

```javascript
const objTransToArray = function (obj) {
  let arr = [];
  Object.keys(obj).forEach((itemKey) => {
    let o = {};
    o[itemKey] = obj[itemKey];
    arr.push(o);
  });
  return arr;
};
```

## 判断数据类型

### 方法 1 返回值为 Boolean 值

```javascript
// yourData 传入的数据
// dataType 要验证的数据类型，例如 String Number
const checkType = function (yourData, dataType) {
  const type = Object.prototype.toString.call(yourData).slice(8, -1);
  return type === dataType;
};
```

### 方法 2 返回值为数据类型

```javascript
// checkdataType({}); // "object"
const checkdataType = function (yourData) {
  const type = Object.prototype.toString.call(yourData).slice(8, -1);
  return type.match(/\[object (.*?)\]/)[1].toLowerCase();
};
```

## 巧用 window.open

不想使用 a 标签破环样式结构的话，可以使用 window.open 实现部分常用功能  
`window.open(URL,name,specs,replace)`

```javascript
//  在当前页面显示拨打电话
window.open("tel:15000000000", "_self");
```

## js 获取 div 宽高

```javascript
const o = document.getElementById("view");
const height = o.offsetHeight;
const width = o.offsetWidth;
```

## js 时间处理

1. 方法 1：  
   传入一个合法的 date 格式时间数据，返回 {YY, MM, DD, HH, mm, ss}，默认返回当前时间的对象格式  
   例如：`formatDate(new Date())`返回对象：{ YY: '2021', MM: '01', DD: '12', HH: '09', mm: '56', ss: '55' }

```javascript
const formatDate = function (date = new Date()) {
  const YY = date.getFullYear() + "";
  const MM = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "";
  const DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate() + "";
  const HH = date.getHours() < 10 ? "0" + date.getHours() : date.getHours() + "";
  const mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes() + "";
  const ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds() + "";
  return { YY, MM, DD, HH, mm, ss };
};
```

2. 方法 2：  
   返回类似 "2021/01/12 09:48:04" 格式的时间字符串

```javascript
const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};
const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${[year, month, day].map(formatNumber).join("/")} ${[hour, minute, second].map(formatNumber).join(":")}`;
};
```

## js 获取前一天的日期

```javascript
const yestodayDate = function () {
  const today = new Date();
  const yestoday = today - 1000 * 60 * 60 * 24;
  const yestodayDate = new Date(yestoday);
  const res = yestodayDate.toLocaleDateString().replace(/\//g, "-");
  return res;
};
```

## js 获取某月最后一天是几号

```javascript
const getLastdayOfTheMonth = function (data) {
  let month = new Date(date).getMonth() + 1;
  let year = new Date(date).getFullYear();
  if (month > 11) {
    month -= 12;
    year++;
  }
  let nextDate = new Date(year, month, 1);
  return new Date(nextDate.getTime() - 1000 * 60 * 60 * 24).getDate();
};
```

## 更新对象属性值

在不给目标对象增加新的属性的同时更新目标对象属性值

```javascript
const updateObj = function (target, source) {
  const keys = Object.keys(target);
  // const merge = Object.assign(target, source) 此方法会直接改变 target 对象
  const merge = { ...target, ...source };
  const temp = {};
  keys.map((item, index) => {
    temp[item] = merge[item];
  });
  return temp;
};
```

## 删除数组某一项

index 从 0 开始

```javascript
const deleteItem = function (index, arr) {
  arr.splice(index, 1);
};
```

## 获取文件类型

```javascript
//  方法1
const fileType = fileName.substring(fileName.lastIndexOf(".") + 1);
//  方法2
const fileType = fileName.split(".").pop().toLowerCase();
```

## 复制文字

```javascript
function copy(targetValue) {
  let transfer = document.createElement("input");
  document.body.appendChild(transfer);
  transfer.value = targetValue; // 这里表示想要复制的内容
  transfer.focus();
  transfer.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
  }
  transfer.blur();
  document.body.removeChild(transfer);
}
```

## 数组去重

```javascript
function uniqueArr(arr) {
  return Array.from(new Set(arr));
}

let tempArr = [1, 1, 2, 3, "3", 4, "4", 5, 5, 5, 6];
const resArr = uniqueArr(tempArr);
console.log(resArr); // [1, 2, 3, "3", 4, "4", 5, 6]
```

## 前端排序

1. 简单排序

```js
let students = [
  { name: "安吉利", score: 85, id: "324" },
  { name: "Ade", score: 92, id: "154" },
  { name: "aww", score: 78, id: "1666" },
  { name: "维尔得", score: 92, id: "12" },
];

// 1. 按分数升序排序
students.sort(function (a, b) {
  return a.score - b.score;
});
console.log("按分数升序:", students);

// 2. 按分数降序排序
students.sort(function (a, b) {
  return b.score - a.score;
});
console.log("按分数降序:", students);

// 3. 倒序整个数组
students.reverse();
console.log("倒序:", students);

// 4. 按姓名升序排序 (简单字符串比较)
students.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
console.log("按姓名升序:", students);
```

2. 数字中英混合排序(简单)  
   代码说明：  
   使用 localeCompare 方法：  
   localeCompare 是 JavaScript 内置的字符串比较方法  
   参数 'zh-CN' 指定使用中文（简体）的排序规则  
   自动处理中文字符的拼音排序（按拼音首字母顺序）

   排序规则：  
   中文按拼音首字母排序（如：陈(C) < 李(L) < 王(W) < 张(Z)）  
   英文按字母顺序排序（A-Z）  
   中英混合时统一按拼音/字母顺序混合排序（如：Alice < Bob < 陈六 < 李四）

```js
function sortByName(arr) {
  return arr.sort((a, b) => {
    return a.name.localeCompare(b.name, "zh-CN");
    /*
     如需区分大小写：添加 sensitivity: 'case' 选项
     如需数字智能排序：添加 numeric: true 选项

    return a.name.localeCompare(b.name, "zh-CN", {
      sensitivity: "case",
      numeric: true,
    });
    */
  });
}

// 示例用法
const arrayA = [
  { name: "1" },
  { name: "1123" },
  { name: "表格导入商标状态待审中1" },
  { name: "1A123" },
  { name: "测试权重2" },
  { name: "1a" },
  { name: "www测" },
  { name: "NIAOREN" },
  { name: "Alice" },
  { name: "Bob" },
  { name: "13网银" },
  { name: "3wang英吉利" },
  { name: "陈六" },
  { name: "bob" },
];

const sortedArray = sortByName(arrayA);
console.log(sortedArray);
// 注意！！！不同环境的js打印出的结果不一样，我测试的就有如下两种结果

/* 结果1：
[
  { name: '1' },
  { name: '1123' },
  { name: '13网银' },
  { name: '1a' },
  { name: '1A123' },
  { name: '3wang英吉利' },
  { name: 'Alice' },
  { name: 'bob' },
  { name: 'Bob' },
  { name: 'NIAOREN' },
  { name: 'www测' },
  { name: '测试权重2' },
  { name: '表格导入商标状态待审中1' },
  { name: '陈六' }
]
*/

/* 结果2：
[
  { name: '1' },
  { name: '1123' },
  { name: '13网银' },
  { name: '1a' },
  { name: '1A123' },
  { name: '3wang英吉利' },
  { name: '测试权重2' },
  { name: '表格导入商标状态待审中1' },
  { name: '陈六' }
  { name: 'Alice' },
  { name: 'bob' },
  { name: 'Bob' },
  { name: 'NIAOREN' },
  { name: 'www测' },
]
*/
```

3. 数字中英混合排序(严谨)  
   以下是实现按照数字 > 字母 > 中文的优先级进行排序的 JavaScript 代码：

```javascript
function sortByName(arr) {
  return arr.sort((a, b) => {
    const nameA = a.name || "";
    const nameB = b.name || "";

    // 判断字符类型
    const getCharType = (char) => {
      if (!char) return 3; // 空值处理
      if (/[\d]/.test(char)) return 0; // 数字
      if (/[a-zA-Z]/.test(char)) return 1; // 字母
      return 2; // 中文及其他
    };

    // 获取第一个有效字符的类型
    const firstCharA = nameA.charAt(0);
    const firstCharB = nameB.charAt(0);
    const typeA = getCharType(firstCharA);
    const typeB = getCharType(firstCharB);

    // 不同类型按优先级排序
    if (typeA !== typeB) {
      return typeA - typeB;
    }

    // 相同类型使用localeCompare排序
    return nameA.localeCompare(nameB, "zh-CN");
  });
}

// 测试示例
const testData = [
  { name: "张三" },
  { name: "李四" },
  { name: "apple" },
  { name: "Banana" },
  { name: "王五" },
  { name: "123" },
  { name: "42" },
  { name: "赵六" },
  { name: "zebra" },
  { name: "apple" },
  { name: "陈七" },
  { name: "" }, // 测试空字符串
  { name: "中文" },
  { name: "Alphabet" },
];

const sortedData = sortByName(testData);
console.log(sortedData);
```

- 代码说明：

1. **优先级规则**：

- **数字开头**（0-9）优先于所有其他类型
- **字母开头**（a-z，A-Z）次优先
- **中文/其他字符**最后

2. **实现逻辑**：

- **字符类型检测**：使用正则表达式判断首字符类型
- **优先级排序**：不同类型按数字(0) > 字母(1) > 中文(2)的顺序排序
- **同类型排序**：
  - 数字：按数值大小排序（如"42" > "123"）
  - 字母：按字母顺序排序（不区分大小写）
  - 中文：按拼音首字母排序

3. **特殊处理**：

- 空字符串或 undefined 视为中文类型
- 支持中英文混合字符串（如"中文 abc"）
- 正确处理大小写字母（A-Z 排在 a-z 之前）

- 测试输出结果：

```javascript
[
  { name: "123" }, // 数字
  { name: "42" }, // 数字
  { name: "Alphabet" }, // 字母
  { name: "apple" }, // 字母
  { name: "apple" }, // 字母
  { name: "Banana" }, // 字母
  { name: "zebra" }, // 字母
  { name: "" }, // 空字符串(视为中文)
  { name: "陈七" }, // 中文
  { name: "李四" }, // 中文
  { name: "王五" }, // 中文
  { name: "张三" }, // 中文
  { name: "赵六" }, // 中文
  { name: "中文" }, // 中文
];
```

- 关键特点：

1. **多级排序**：优先按首字符类型排序，再按具体值排序
2. **中文支持**：使用`localeCompare`的'zh-CN'参数实现拼音排序
3. **健壮性**：处理了空值、空字符串等边界情况
4. **效率优化**：仅对首字符进行类型检测，减少计算量

此实现严格遵循数字 > 字母 > 中文的优先级规则，同时确保同类型内的合理排序，满足各种实际应用场景的需求。

## 数组取交集/差集

```javascript
// 取交集
function intersection(a, b) {
  return a.filter((v) => b.includes(v));
}
// 取差集
function difference(a, b) {
  return a.concat(b).filter((v) => !a.includes(v) || !b.includes(v));
}
const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 7, 8, 9];
intersection(a, b); // [1,2,3]
difference(a, b); // [4,5,7,8,9]
```

## 数组 a 是否包含数组 b

```javascript
arrayIncludes(a,b){
  return b.every(val=>a.includes(val));
}
```

## 实现按照给定 ID 数组顺序对对象数组进行排序

```js
function sortByIds(A, B) {
  // 创建映射：ID -> 在A中的索引
  const idIndexMap = new Map();
  A.forEach((id, index) => {
    idIndexMap.set(id, index);
  });

  // 创建新数组避免修改原数组，同时记录原始索引
  const sortable = B.map((item, originalIndex) => ({
    item,
    originalIndex,
    // 计算排序索引：如果ID在A中存在则使用A中的索引，否则排在最后并保持相对顺序
    sortIndex: idIndexMap.has(item.id) ? idIndexMap.get(item.id) : A.length + originalIndex,
  }));

  // 按排序索引进行排序
  sortable.sort((a, b) => a.sortIndex - b.sortIndex);

  // 返回排序后的对象数组
  return sortable.map((entry) => entry.item);
}

// 使用示例
const A = [3, 1, 2];
const B = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" }, // 不在A中的ID
];

const sortedB = sortByIds(A, B);
console.log(sortedB);
/* 输出：
[
    {id: 3, name: 'Charlie'},  // 对应A[0]
    {id: 1, name: 'Alice'},    // 对应A[1]
    {id: 2, name: 'Bob'},      // 对应A[2]
    {id: 4, name: 'David'}     // 不在A中的元素保持原相对顺序
]
*/
```

## 字符串转数组

```js
const str = "1, 2, 3, 4, 5";

const arr1 = str.split(",");
// 去除空格
const arr2 = str.split(",").map((item) => item.trim());
```

## 下划线转驼峰命名

```javascript
function tuHump(name) {
  return name.toLowerCase().replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
```

## 滚动到页面顶部、底部

```js
// 返回顶部
const scrollToTop = () => {
  const targetDom = document.getElementById("scroll-wrap");
  if (targetDom) {
    targetDom.scrollTop = 0;
  }
};

// 返回底部
const scrollToBottom = () => {
  const targetDom = document.getElementById("scroll-wrap");
  targetDom.scrollTop = targetDom.scrollHeight;
};
const scrollToBottom = () => {
  const targetDom = document.getElementsByClassName("scroll-wrap");
  for (let i = 0; i < targetDom.length; i++) {
    targetDom[i].scrollTop = targetDom[i].scrollHeight;
  }
};
```

## 滚动到某个子元素的位置

```html
<div id="parent">
  <div class="child" id="child1">1</div>
  <div class="child" id="child2">2</div>
  <!-- ...... -->
  <div class="child" id="child9">9</div>
  <div class="child" id="child10">10</div>
</div>
<script>
  const parent = document.getElementById("parent");
  const child = document.getElementById("child4");
  parent.scrollTo({
    top: child.offsetTop, //需要父元素设置postion(relative、absolute、fixed)
    behavior: "smooth",
  });
</script>
```

## 获取两个元素的纵向距离

```js
let ele1Top = document.getElementById("ele1")?.getBoundingClientRect().top;
let ele2Top = document.getElementById("ele2")?.getBoundingClientRect().top;
const distance = ele2Top - ele1Top;
```

## 防抖和节流

函数防抖（debounce）：  
当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新
开始延时。

```js
// 防抖函数
function debounce(func, wait) {
  let timeout = null;
  return function () {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}
// 处理函数
function handle() {
  console.log(Math.random());
}
// 滚动事件
window.addEventListener("scroll", debounce(handle, 1000));
```

函数节流（throttle）：  
当持续触发事件时，保证一定时间段内只调用一次事件处理函数。

```js
// 使用时间戳实现节流
function throttle(func, delay) {
  let prev = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  };
}
function handle() {
  console.log(Math.random());
}
// 快速点击浏览器进行测试
window.addEventListener("click", throttle(handle, 1000));

// 使用定时器实现节流
function throttle(func, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        func.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}
function handle() {
  console.log(Math.random());
}
// 快速点击浏览器进行测试
window.addEventListener("click", throttle(handle, 1000));
```

## 判断一个字符串能否转换为有效的数字类型

```js
function isNumeric(str) {
  return typeof str === "string" && str.trim() !== "" && !isNaN(str);
}
```

## 压缩下载图片

```javascript
import JSZip from "jszip";
import { saveAs } from "file-saver";

async function downloadImages(imageUrls, zipFileName = "images.zip") {
  const zip = new JSZip();
  const imgFolder = zip.folder("images"); // 创建一个名为 'images' 的文件夹

  // 异步获取并添加图片到压缩包
  const imagePromises = imageUrls.map(async (imageUrl, index) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const filename = imageUrl.substring(imageUrl.lastIndexOf("/") + 1) || `image-${index + 1}.jpg`;
      imgFolder.file(filename, blob);
    } catch (error) {
      console.error(`Error downloading or adding image ${imageUrl}:`, error);
      // 可以选择添加错误处理逻辑，比如跳过，或者提示用户
    }
  });

  // 等待所有图片都处理完毕
  await Promise.all(imagePromises);

  // 生成zip文件
  zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, zipFileName);
  });
}

// 示例用法
const imageUrls = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.png",
  "https://example.com/image3.gif",
];

downloadImages(imageUrls, "my_images.zip");
```
