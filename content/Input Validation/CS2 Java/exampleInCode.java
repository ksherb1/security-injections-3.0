import java.util.Scanner;
public class InputValidationExample {

  public static void main(String[] args) {
    int[] vals = new int[10];

    for (int i = 0; i < 10; i++) {
      vals[i] = (i+1)*(i+1);
    }

    System.out.print("Please type a number: ");
    Scanner sc = new Scanner(System.in);
    int which = sc.nextInt();

    int square = vals[which-1];
    System.out.println("The square of "+which+" is "+square);
  }
}