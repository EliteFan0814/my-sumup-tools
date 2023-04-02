### java 反射

#### Class 类

java 运行时系统始终为所有对象维护一个运行时类型标识，这个信息就是类的说明书，会跟踪每一个对象所属的类。保存这些信息的类
名为 Class。

获取某个类的 Class 类对象：

```java
// getClass 方法返回类名对应的Class对象
Employee e = new Employee();
Class cl = e.getClass();

// 使用静态方法forName获得类名对应的Class对象
String className = "java.util.Random";
Class cl = Class.forName(className);

// 如果T是任意的java类，T.class 将是匹配的类对象
Class cl1 = Random.class;
Class cl2 = int.class;
Class cl3 = Double[].class;
```

Class 类也是一个泛型类：Emplyee.class 的类型是 Class<Employee>

#### 使用 Class 类查找获取资源的功能

- 什么是资源文件：一般指除了.java 和.class 结尾的文件，都是资源文件，例如图像和声音文件。

在一个拥有资源文件的类的 Class 对象 ResourceTest 中

```java
Class cl = ResourceTest.class;
URL aboutURL = cl.getResource("about.gif");
var icon = new ImageIcon(aboutURL);

InputStream stream = cl.getResourceAsStream("data/about.txt");
var about = new String(stream.readAllBytes(),"UTF-8");
```
