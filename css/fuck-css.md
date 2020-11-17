---
description: 坑爹的CSS
---
## :nth-child\(an+b\)

这个 CSS 伪类首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从1开始排序，选择的结果为CSS伪类:nth-child括号中表达式（an+b）匹配到的元素集合（n=0，1，2，3...）  
注意：n 是从0开始的，但是通过 an+b 得出的顺序是从 1开始的：

```css
.course-item:nth-child(2n) {
    background-color: #f5f5f5;
}
/* 这里当n等于0时，如下这个样式是无效的，因为元素要从第1个开始 */ 
.course-item:nth-child(0) {
    background-color: #f5f5f5;
}
```