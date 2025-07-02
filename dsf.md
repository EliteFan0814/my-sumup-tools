以下是使用JavaScript实现按照`name`属性进行正序排序的代码，支持中文按拼音首字母排序：

```javascript
function sortByName(arr) {
    return arr.sort((a, b) => {
        return a.name.localeCompare(b.name, 'zh-CN');
    });
}

// 示例用法
const arrayA = [
    { name: "李四" },
    { name: "张三" },
    { name: "王五" },
    { name: "Alice" },
    { name: "Bob" },
    { name: "陈六" }
];

const sortedArray = sortByName(arrayA);
console.log(sortedArray);
```

### 代码说明：
1. **使用 `localeCompare` 方法**：
   - `localeCompare` 是JavaScript内置的字符串比较方法
   - 参数 `'zh-CN'` 指定使用中文（简体）的排序规则
   - 自动处理中文字符的拼音排序（按拼音首字母顺序）

2. **排序规则**：
   - 中文按拼音首字母排序（如：陈(C) < 李(L) < 王(W) < 张(Z)）
   - 英文按字母顺序排序（A-Z）
   - 中英混合时统一按拼音/字母顺序混合排序（如：Alice < Bob < 陈六 < 李四）

3. **示例输出**：
```javascript
[
  { name: "Alice" },
  { name: "Bob" },
  { name: "陈六" },
  { name: "李四" },
  { name: "王五" },
  { name: "张三" }
]
```

### 注意事项：
1. **不改变原数组**：如果需要保留原数组，可先创建副本：
   ```javascript
   const sorted = [...arr].sort((a,b) => ...);
   ```
2. **浏览器兼容性**：
   - 所有现代浏览器均支持
   - IE10+ 支持（需要启用Intl支持）
3. **扩展功能**：
   - 如需区分大小写：添加 `sensitivity: 'case'` 选项
   - 如需数字智能排序：添加 `numeric: true` 选项
   ```javascript
   a.name.localeCompare(b.name, 'zh-CN', { 
       sensitivity: 'case', 
       numeric: true 
   })
   ```

此实现符合中文拼音排序习惯，同时正确处理中英文混合排序场景。