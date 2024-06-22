import java.util.Scanner;
public class Main
{
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.println("Enter Percentage:");
        int per=s.nextInt();
        switch (per){
            case 90:
                System.out.println("GRADE A");
                break;
            case 80:
                System.out.println("GRADE B");
                break;
            case 70:
                System.out.println("GRADE C");
                break;
            case 60:
                System.out.println("GRADE D");
                break;
            case 50:
                System.out.println("GRADE E");
                break;
            case 40:
                System.out.println("GRADE F");
                break;
        }
    }
}