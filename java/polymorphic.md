### 多态

```java
// Base.java
public class Base {
    public void print(ParamBase param){
        System.out.println("I am Base, the param is ParamBase");
    }

    public void print(ParamSub param) {
        System.out.println("I am Base, the param is ParamSub");
    }
}

// Sub.java 继承Base
public class Sub extends Base {
    @Override
    public void print(ParamBase param) {
        System.out.println("I am Sub, the param is ParamBase");
    }

    @Override
    public void print(ParamSub param) {
        System.out.println("I am Sub, the param is ParamSub");

    }
}
// ParamBase.java
public class ParamBase {
}

// ParamSub 继承ParamBase
public class ParamSub extends ParamBase{
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Base object = new Sub();
        ParamBase param = new ParamSub();
        object.print(param);
    }
}
// 打印结果：
// I am Sub, the param is ParamBase
```

实例方法默认是多态的，方法的参数是静态绑定的，方法是动态绑定的。
