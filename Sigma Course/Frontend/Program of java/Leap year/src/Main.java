import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter year:");
        int y= sc.nextInt();
        if(y%4==0){
            System.out.println("It is a leap year");
        }
        else {
            System.out.println("Not a leap year");
        }
    }
}