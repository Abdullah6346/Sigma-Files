import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        System.out.println("Enter Time ");
         Scanner sc=new Scanner(System.in);
         float a=sc.nextFloat();
        System.out.printf("Angle at %f B/W hands of clock will be %f",a,a* 3.14/6);

    }
}