import java.util.Scanner;
public class Main {
    public static void main(String[]args){
        System.out.println("Enter distance in km:");
        Scanner sc=new Scanner(System.in);
        float km=sc.nextFloat();
        float mile= (float) (km*0.621);
        System.out.println(mile);
    }
}