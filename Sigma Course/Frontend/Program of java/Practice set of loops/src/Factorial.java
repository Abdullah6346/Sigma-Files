import java.util.Scanner;
public class Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t=1;
        System.out.println("Enter number for factorial");
        int f = sc.nextInt();
        for (int n=1; n<=f; n++) {
            t=t*n;
        }
        System.out.println(t);
    }
}
