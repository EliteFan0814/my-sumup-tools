### java 泛型

java1.5 引入了泛型

#### 没有泛型的年代

```java
// 没有泛型时，如下这样写是不会报错的，现在这样写也不会报错，但是编译器会警告
public static void main(String[] args) {
    List list = new ArrayList();
    list.add(new Object());
    list.add(1);
    list.add("foolish");
}
```

那没有泛型时怎么保证类型安全呢，可以如下这样自己封装一个（装饰器）只能加入字符串
的 List，但是我们不能无休止的自己封装仅限某个类的 List。

```java
public class Main {
    public static void main(String[] args) {
        ListString list = new ListString();
        list.add("泛型");

    }

    static class ListString {
        List list = new ArrayList();

        public void add(String s) {
            list.add(s);
        }

        public int size() {
            return list.size();
        }

        public String get(int i) {
            return (String) list.get(i);
        }
    }
    static class ListInt {
        List list = new ArrayList();

        public void add(int s) {
            list.add(s);
        }

        public int size() {
            return list.size();
        }

        public int get(int i) {
            return (int) list.get(i);
        }
    }
}
```

有了泛型就简单多了

```java
public static void main(String[] args) {
    ArrayList<String> listString = new ArrayList();
    ArrayList<Integer> listInt = new ArrayList();
}
```

#### 为什么说 java 泛型是“假泛型”

java 从没有泛型的时代走到有泛型的时代，那 java1.5 之前的代码怎么做兼容？  
有两个方案：

1. 擦除【java 的选择】
2. 提供一套全新 API【c#的选择】

什么是擦除，看如下 Main.java 文件

```java
public class Main {
    public static void main(String[] args) {
        String[] strings = new String[10];
        ArrayList<String> stringArrayList = new ArrayList<>();
        strings[0] = "字符串";
        stringArrayList.add("泛型");
    }
}
```

我们对 Main.java 文件使用:  
` javac -encodeing utf-8 Main.java`  
进行编译之后，打开编译后的 Main.class 的文件：

```java
public class Main {
    public Main() {
    }

    public static void main(String[] var0) {
        String[] var1 = new String[10];
        ArrayList var2 = new ArrayList();
        var1[0] = "字符串";
        var2.add("泛型");
    }
}
```

对应的字节码文件为：

```java
  public static main([Ljava/lang/String;)V
   L0
    LINENUMBER 8 L0
    BIPUSH 10
    ANEWARRAY java/lang/String
    ASTORE 1
   L1
    LINENUMBER 9 L1
    NEW java/util/ArrayList
    DUP
    INVOKESPECIAL java/util/ArrayList.<init> ()V
    ASTORE 2
   L2
    LINENUMBER 10 L2
    ALOAD 1
    ICONST_0
    LDC "\u5b57\u7b26\u4e32"
    AASTORE
```

我们发现 `ArrayList<String> stringArrayList = new ArrayList<>();`的本质还
是`ArrayList var2 = new ArrayList()`/`NEW java/util/ArrayList`，所传递的泛型类被
擦除了。因为 jvm 最终运行的是生成的.class 文件，所以说 java 的泛型是“假泛型”
