
import java.util.Scanner;

  public class Overflow2 {
  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);
    int[] vals = new int[10];

    System.out.println("How many values should be stored in the array? ");
    int count = scan.nextInt();

    for (int i = 0; i < count; i++ ) {
      vals[i] = count-i;
    }

    System.out.println("Which value do you wish to retrieve? ");
    int which = scan.nextInt();

    System.out.println("Your value is " +vals[which]);
  }
}