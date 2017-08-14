import java.util.Scanner;
public class Overflow2
{
  public static void main(String[] args)
  {
    int[] tests = new int[10];
    int test;
    int count;
    Scanner scan = new Scanner(System.in);

    System.out.print("How many numbers? ");
    count = scan.nextInt();
    for (int i = 0; i < count; i++)
    {
        System.out.print("Please type a number: ");
        test  = scan.nextInt();
        tests[i] = test;
    }
  }
}