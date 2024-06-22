public class Main {
    public static void main(String[] args) {
        String s="Muhammad Abdullah";
        int n=s.length();//1method
        System.out.println(n);
        System.out.println(s.toLowerCase());//2nd method
        System.out.println(s.toUpperCase());//3rd Function
        System.out.println(s.trim());//4 function
        System.out.println(s.substring(9));//5 function (9 is parameter)
        System.out.println(s.substring(0,9));   //6 FUNCTiON:09 are parameters
        System.out.println(s.replace('d','b'));//7 Function
        System.out.println(s.replace("Abdullah","Nadeem"));//7 Function
        System.out.println(s.startsWith("M"));//8 Function
        System.out.println(s.endsWith("h"));//9 Function
        System.out.println(s.charAt(9));//10function
        System.out.println(s.indexOf("mm"));//11method
        System.out.println(s.indexOf("mm",8));//12Function
        System.out.println(s.lastIndexOf("m"));//13Function
        System.out.println(s.lastIndexOf("m",7));//14function
        System.out.println(s.equals("Muhammad Abdullah"));//15function
        System.out.println(s.equalsIgnoreCase("MUHAMMAD ABDULLAH"));//16Method
    }
}


