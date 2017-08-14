import java.util.Scanner;

public class IntegerError {

  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);
    // variable declarations
    int i;
    int j;
    int result;

    System.out.println("Largest integer is "+Integer.MAX_VALUE);
    System.out.println("Smallest integer is "+Integer.MIN_VALUE);

    System.out.print("Input two integer values: ");
    i = scan.nextInt();
    j = scan.nextInt();

    System.out.println("\nYou entered the following values: ");
    System.out.println("Integer: "+ i + " " + j);

    /* comment these lines for now
    result =  i * 10;
    System.out.println("Your number times ten is "+result);
    result =  i + j;
    System.out.println("The sum of your numbers is "+result);
    result =  i * j;
    System.out.println("The product of your numbers is "+result);
    */

  }
}