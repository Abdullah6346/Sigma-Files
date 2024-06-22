import java.util.Scanner;
public class Main{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter table number");
        int t=sc.nextInt();
        int v=1;
        while(v<=10){
            System.out.printf("%d * %d =%d\n",v,t,v*t);
            v++;

        }

    }
}