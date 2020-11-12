---
description: sass文档总结
---

# \$ 符号声明变量

sass 声明的变量值用作 css 的属性值

```scss
/*  声明变量 */
$base-color: #fff;
$base-font: italic arial, sans-serif;
$highlight-color: #F90;

div{
  $base-width:20px; // 只能在当前 div 中来使用此变量
  color:$base-color;
  font:$base-font;
  width:$base-width;
  border: 1px solid $highlight-color;
}
```
