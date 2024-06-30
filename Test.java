
public class Test {
    public static void main(String[] args) {
        byte b = (byte) 2000;
        System.out.println(b);// -48

        int i = (int) 100L;
        System.out.println(i);// 100

        int i2 = (int) 2147483648L;
        System.out.println(i2);// -2147483648
    }
}
