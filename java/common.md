### 不使用 double 表示价格

原因：double 是不精确的；

- 方法一：把所有 元\*100 变成 分 来表示，单位用 int
- 方法二：使用 BigDecimal 类(大的十进制数字)

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
# 在windows上使用;代替:
java -classpath commons-lang-3-3.9.jar:. StringIsBlank 1 2 3
```
