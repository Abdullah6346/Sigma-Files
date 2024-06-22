import java.util.Scanner;
public class Main {
    public static void main(String[]args){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the marks of math:");
        int m=sc.nextInt();
        System.out.println("Enter marks of English:");
        int e=sc.nextInt();
        System.out.println("Enter marks of Urdu:");
        int u=sc.nextInt();
        System.out.println("Enter marks of Computer:" );
        int c=sc.nextInt();
        System.out.println("Enter marks of PS:");
        int p=sc.nextInt();
        System.out.println("Enter marks of IS:");
        int i= sc.nextInt();
        System.out.println("Enter marks of Physics:" );
        int ph= sc.nextInt();
        System.out.println("Enter marks of Chemistry:");
        int ch= sc.nextInt();
        int sum=m+e+u+c+p+i+ph+ch;
        System.out.println("Enter total marks :");
        int total= sc.nextInt();
        float per=(sum/total)*100;
        System.out.println(per);
    }
}