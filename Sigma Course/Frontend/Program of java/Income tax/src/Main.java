import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your income in lacks:");
        double income= sc.nextDouble();
        double tax=0.0;
        if(income<=250000){
            tax=tax+0;
        }
         if (income>250000 && income<=500000){
            tax=income*(5.0/100.0);
        }
        if (income>500000 && income<=1000000) {
            tax=income*(20.0/100.0);
        }
        if (income>1000000) {
            tax=income*(30.0/100);
        }
        System.out.printf("Tax is %f",tax);
    }
}