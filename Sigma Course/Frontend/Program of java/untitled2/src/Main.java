import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
      //question no 2
        int m1,m2,m3;
      Scanner sc=new Scanner(System.in);
        System.out.println("ENTER MARKS OF PHYSICS");
        m1=sc.nextInt();
        System.out.println("ENTER MARKS OF COMPUTER");
        m2=sc.nextInt();
        System.out.println("ENTER MARKS OF MATH");
        m3=sc.nextInt();
       float  avg=(m1+m2+m3)/3.0f;
       if(avg>=40 && m1>=33 && m2>=33 && m3>=33)
       {
         System.out.println("You are pass");
       }
else {
         System.out.println("You are fail");
    }
    //Question no 3
        System.out.println("Input number:");
        int n= sc.nextInt();
        switch (n){
        case 1-> System.out.println("Monday");
        case 2-> System.out.println("Tuesday");
        case 3-> System.out.println("Wednesday");
        case 4-> System.out.println("Thursday");
        case 5-> System.out.println("Friday");
        case 6-> System.out.println("Saturday");
        case 7-> System.out.println("Sunday");
        }


        //Question no 6
        Scanner w1=new Scanner(System.in);
        System.out.println("Enter website name:");
        String w=w1.nextLine();
        if (w.endsWith(".com")){
            System.out.println("It is a commercial website");
        }
        else if(w.endsWith(".in")){
            System.out.println("It is an indian website");
        }
        else if(w.endsWith(".org")){
            System.out.println("It is an organizational website");
        }
        else {
            System.out.println("Please enter a correct website");
        }
}


}