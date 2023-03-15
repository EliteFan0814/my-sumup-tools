### String 类

#### 为什么 string 是不可变字符串

1. String 类是一个 final 类，并且没有提供修改字符串中某个字符的方法，所以 java
   文档中将 String 类对象称为是不可变的。
2. String 类继承自 Object 类，并重写了 hashcode 方法，String 对象可变的话就违反
   了 hashcode 的约定

```java
// 把字符串“hello”改为“helon”，不能直接修改最后两个位置的字符
String a = "hello"
// 可以使用substring方法提取和拼接
a = substring(0,3) + "on"
```

通过截取和拼接字符串效率确实不高，但不可变字符串有一个优点：编译器可以让字符串共
享：  
各种字符串存储在公共的存储池中，字符串变量指向存储池中相应字符串的位置，复制一个
字符串本质上是：原始变量和复制变量指向的是存储池中共享的同一个字符串。  
不可变还带来了线程安全和存储安全的优点。

#### StringBuilder 和 StringBuffer

StringBuilder:线程不安全，但速度快  
StringBuffer: 线程安全，但速度慢
