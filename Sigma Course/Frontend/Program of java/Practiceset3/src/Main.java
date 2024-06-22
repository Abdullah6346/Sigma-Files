import java.util.Locale;

public class Main {
    public static void main(String[] args) {

        //1ST Program
        String name="MUHAMMAD ABDULLAH";
        name=name.toLowerCase();
        System.out.println(name);

        //2nd Program
        String s="Muhammad ali";
        s=s.replace(" ","-");
        System.out.println(s);

        //3rd Program
        String letter="Dear <|name|>,\n\tThanks\n\t A lot";
        letter=letter.replace("<|name|>","Abdullah");
        System.out.println(letter);

      

    }
}