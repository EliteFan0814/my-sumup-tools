## lambda 表达式

### lambda 表达式的产生来源

```java
// 定制一个比较器根据字符串的长度来排序
class LengthComparator implements Comparator<String> {
    @Override
    public int compare(String o1, String o2) {
        return o1.length() - o2.length();
    }
}
var strings = new String[]{"343rere", "abc", "cdfefef", "a", "adeeefffeerf"};
// Arrays.sort(strings); 默认排序
Arrays.sort(strings, new LengthComparator());
```

如上所示，我们只是想实现一个自定义的排序方法，但不得不为了它单独定义一个类，并实
现自定义的方法，在使用的时候传递这个类的一个实例。有没有像其他语言那样可以直接传
递一个函数而不用创建对象呢？

我们可以像下面这样构建一个匿名类来简化

```java
var strings = new String[]{"343rere", "abc", "cdfefef", "a", "adeeefffeerf"};
Arrays.sort(strings, new Comparator<String>() {
    @Override
    public int compare(String o1, String o2) {
        return o1.length() - o2.length();
    }
});
```

进一步简化成如下这样：

```java
var strings = new String[]{"343rere", "abc", "cdfefef", "a", "adeeefffeerf"};
Arrays.sort(strings, (String o1,String o2) -> o1.length() - o2.length());
```

`(String o1,String o2) -> o1.length() - o2.length());`像这种带参数变量的表达式就
叫做 lambda 表达式。  
编译器可以自动推导类型，还可以再进一步简化成如下这样：

```java
var strings = new String[]{"343rere", "abc", "cdfefef", "a", "adeeefffeerf"};
Arrays.sort(strings, (o1, o2) -> o1.length() - o2.length());
```

还可以更进一步简化为方法引用：

```java
var strings = new String[]{"343rere", "abc", "cdfefef", "a", "adeeefffeerf"};
Arrays.sort(strings, Comparator.comparingInt(String::length));
```

### 函数式接口

只有一个抽象方法的接口(可以有别的方法，但抽象方法只能有一个)称为函数式接口。  
上例中的 Comparator 就是一个函数式接口，我们用 lambda 表达式实现了它的 compare
抽象方法。最好把 lambda 表达式看作是一个函数，而不是一个对象，另外要接受 lambda
表达式可以传递到函数式接口，java 并没有为语言增加函数类型，其实像 lambda 表达式
所能做的也只是转换为函数式接口。

java api 在java.util.function 包中定义了很多非常通用的函数式接口。
