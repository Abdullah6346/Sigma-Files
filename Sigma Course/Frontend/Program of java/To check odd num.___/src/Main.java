import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter limit to show odd numbers");
        int n= sc.nextInt();
        for(int a=1;a<=n;a++){
            if(a%2!=0){
                System.out.println(a);
            }
        }
        }
    }
