---
description: sass文档总结
---
# sass文档总结

## $ 符号声明变量
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

## sass 中中划线和下划线命名通用
```scss
/*  $link-color 和 $link_color 通用 */
$link-color: blue;
a {
  color: $link_color;
}
```

##  sass 嵌套规则，是个人都能懂，但有注意事项
1. 父选择器的标识符 &  
sass 解嵌套是把父选择器通过空格连接子选择器，这在 css 中代表后代选择器，但是有时候我们不想要应用到所有后代
```scss
/*例如：*/
article a {
  color: blue;
  :hover { color: red }
}
/*会被解析成*/
article a {
  color: blue;
}
article a :hover{
   color: red;
}
/*而我们想要的效果是这样的 注意 a 和 :hover 之间无空格*/
article a:hover{
   color: red;
}
/*那就使用 & ，它代表父选择器*/
article a {
  color: blue;
  &:hover { color: red }
}
/*会被解析成*/
article a {
  color: blue;
}
article a:hover{
   color: red;
}
```

