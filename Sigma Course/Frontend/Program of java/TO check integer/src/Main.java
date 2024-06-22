import java.util.Scanner;
public class Main {
    public static void main(String[]args){
        System.out.println("Enter an integer:");
        Scanner sc=new Scanner(System.in);
        int c= sc.nextInt();
        System.out.println(sc.hasNextInt());

    }
}