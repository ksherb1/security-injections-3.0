import java.util.*;
public class Testscore {
  public static void main(String[] args) {
    Scanner console = new Scanner(System.in);

    System.out.println("Enter test score");
    int testScore = console.nextInt();

    if (testScore >= 90)
      System.out.println("Your grade is A");
    else if (testScore >= 80)
      System.out.println("Your grade is B");
    else if (testScore >= 70)
      System.out.println("Your grade is C");
    else if (testScore >= 60)
      System.out.println("Your grade is D");
    else
      System.out.println("Your grade is F");
  }
}