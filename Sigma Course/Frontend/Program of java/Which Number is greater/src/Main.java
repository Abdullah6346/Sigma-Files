import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        int a,b;
        Scanner s=new Scanner(System.in);
        System.out.println("Enter a and b:");
        a=s.nextInt();
        b=s.nextInt();
        if(a>b){
            System.out.printf("%d is GREATER",a);
        }
        else{
            System.out.printf("%d is GREATER",b);
        }
    }
}