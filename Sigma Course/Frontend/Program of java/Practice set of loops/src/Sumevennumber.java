import  java.util.Scanner;
public class Sumevennumber{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter number");
        int n=sc.nextInt();
        System.out.println("Even numbers:");
        int e=1;
        while(e<=n){
            System.out.printf("%d\n",e*2);
            e++;
        }
    }
}
