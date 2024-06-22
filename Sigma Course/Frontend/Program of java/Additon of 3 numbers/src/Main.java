import java.util.Scanner;
public class Main {
    public static void main(String[]args){
        System.out.println("Enter first number:");
        Scanner sc=new Scanner(System.in);
        int n1=sc.nextInt();
        System.out.println("Enter second number:");
        int n2=sc.nextInt();
        System.out.println("Enter third number:");
        int n3= sc.nextInt();
        int total=n1+n2+n3;
        System.out.println(total);
    }
}