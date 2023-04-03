### java 访问控制修饰符

1. 仅对本类可见----private
2. 对外部完全可见----public
3. 对本包和所有子类可见----protected
4. 对本包可见----默认，不需要任何修饰符

### java 检测字符串是否相等

一定使用 equals 方法，不要使用 ==

```java
String s = "Hello";
String sb = "Hello";
"hello".equals(s); // false
"hello".equalsIgnoreCase(s); // true
s == sb; // 不确定
```

**你可以简单地认为在 java 中，字符串存放在公共的存储池中，字符串变量指向存储池中
相应的位置**  
例如复制一个字符串变量，原始字符串与负值字符串共享相同的字符

== 运算符只能够确定两个字符串是否存放在同一个位置，也就是说 `s == sb` 比较的是两
个字符串的内存地址是否一样，但是完全有可能内容相同的多个字符串副本放置在不同位置
，导致`s == sb`为 false。

### 不使用 double 表示价格

原因：double 是不精确的；

- 方法一：把所有 元\*100 变成 分 来表示，单位用 int
- 方法二：使用 BigDecimal 类(大的十进制数字)

### java 重写(override)和重载(overload)

1. 重写是子类对父类的允许访问的方法的实现过程进行重新编写, 返回值和形参都不能改
   变。
2. 重载是在一个类里面，方法名字相同，而参数不同。返回类型可以相同也可以不同。

### 内部类与一个.java 文件定义多个类

#### 什么是内部类

定义：定义在另一个类的内部的类称为内部类(Nested Class)

#### 一个.java 文件定义多个类

一个.java 文件可以定义多个类，但只能有一个 public 的类，并且 public 的类名必须与
文件名相一致。一个文件中可以不含 public 类，如果只有一个非 public 类，此时可以跟
文件名不同  
此 java 文件被编译时会按定义类的个数产生同样多个.class 文件

#### 一个.java 文件定义多个类

### 使用命令行编译运行 java 程序

#### 环境变量和系统属性（jvm 中独有的属性）

1. java 中使用`System.getenv("AAA")`获取当前环境的环境变量 AAA
2. java 中使用`System.getProperty("AAA")`获取 JVM 中的系统属性

```java
public class Main{
    public static void main(String []args){
        System.out.println("args:"+java.util.Arrays.toString(args));
        System.out.println("env:"+System.getenv("AAA"));
        System.out.println("system property:"+System.getProperty("AAA"));
        System.out.println("java version:"+System.getProperty("java.version"));
        System.out.println("user.dir:"+System.getProperty("user.dir"));
    }
}
```

在命令行中运行如上 java 程序：

```bash
# 编译.java文件
javac Main.java
# 设置一个当前环境变量AAA
export AAA=999
# 使用-D设置一个系统属性AAA=789并向java程序传递参数444 555 666 运行 .class文件
java -DAAA=789 Main 444 555 666
# 输出：
args:[444, 555, 666]
env:999
system property:123
java version:1.8.0_311
user.dir:C:\Users\Elite Fan\cli-test
```

**系统属性的传递使用-D 开头，而且系统属性的传递必须放在 java 后**

在命令行中运行引用有第三方 jar 包的 java 程序：

```java
// 假设所在工作包含 commons-lang-3-3.9.jar 包
import org.apache.commons.lang3.StringUtils;

public class StringIsBlank {
  public static void main(String[] args) {
    System.out.println("Args size: " + args.length);
    System.out.println("First argument is blank: " + StringUtils.isBlank(args[0]));
    System.out.println("Second argument is blank: " + StringUtils.isBlank(args[1]));
    System.out.println("Third argument is blank: " + StringUtils.isBlank(args[2]));
  }
}
```

```bash
# 告诉 javac 所引用的三方类库的位置
javac -classpath commons-lang-3-3.9.jar StringIsBlank.java
# StringIsBlank运行所需要的类在 commons-lang-3-3.9.jar 和当前文件夹内进行寻找 -classpath 可简写为 -cp
# 在windows系统上使用;代替:符号
java -classpath commons-lang-3-3.9.jar:. StringIsBlank 1 2 3
```

### java 传参问题

```java
public class TestParams {
    public static int a;

    public static void setInt(int a) {
        a = 888;
    }

    public static void main(String[] args) {
        setInt(a);
//        此处打印的a的值为什么不是888？
        System.out.println(a);
    }
}
```
