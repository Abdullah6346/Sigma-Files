import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
      Scanner sc=new Scanner(System.in);
        System.out.println("ENTER PERCENTAGE:");
        float per=sc.nextFloat();
        if(per>=90){
            System.out.println("GRADE A");
        }
        else if (per>=80) {
            System.out.println("GRADE B");
        }
        else if (per>=70)
        {
            System.out.println("GRADE C");
        }
        else if (per>=60) {
            System.out.println("GRADE D");
        }
        else if (per>=50) {
            System.out.println("GRADE E");
        }
        else {
            System.out.println("F");
        }
    }

}