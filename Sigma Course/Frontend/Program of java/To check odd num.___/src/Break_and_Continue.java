public class Break_and_Continue {
    public static void main(String[] args) {
       //Break
        for(int i=1;i<=9;i++){
            if(i==8){
                break;
            }
            System.out.println(i);
        }
        //Continue
        for(int i=1;i<=9;i++){
            if(i==2){
                continue;
            }
            System.out.println(i);
        }
    }
}
