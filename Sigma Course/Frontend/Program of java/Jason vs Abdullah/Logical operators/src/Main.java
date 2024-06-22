import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
       Scanner s=new Scanner(System.in);
        System.out.println("Enter Marks OF ABDULLAH AND JASON:");
        int a=s.nextInt();
        int j=s.nextInt();
        if(a==j||a>j){
            System.out.println("Abdullah is Winner");
        }
        else{
            System.out.println("TRY AGAIN ALLAH HELP YOU");
        }
}
}