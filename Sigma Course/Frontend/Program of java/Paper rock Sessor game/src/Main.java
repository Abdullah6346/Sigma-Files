import java.util.Scanner;
import java.util.Random;
public class Main {
    public static void main(String[] args)
    {
        Random r=new Random();
        int c=r.nextInt(1,3);
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter 1 for paper\n 2 for scissor \n 3 for rock: ");
        int s=sc.nextInt();
        if(c==1 && s==2){
            System.out.println("Paper vs Scissor");
            System.out.println("You are winner");
        }
        if (c==1 && s==3)
        {
            System.out.println("Paper vs Rock");
            System.out.println("YOU are loser");
        }
         if (c==2 && s==1)
        {
            System.out.println("Scissor vs Paper");
            System.out.println("YOU ARE LOSER");
        }
         if (c==2 && s==3) {
            System.out.println("Scissor vs Rock");
            System.out.println("You are Winner");
        }
         if (c==3 && s==1)
        {
            System.out.println("Rock vs Paper");
            System.out.println("You are Winner");
        }
         if (c==3 && s==2)
        {
            System.out.println("Rock vs Scissor");
            System.out.println("You are loser");
        }

    }
}