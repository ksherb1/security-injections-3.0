import java.util.*;
public class WhileEx {
  public static void main(String[] args)
  {
    Scanner console = new Scanner(System.in);
    int age;
    int total = 0;
    System.out.println("Please enter 10 ages: ");
    for (int i = 0;i < 10; i++)
    {
      age = console.nextInt();
      total = total + age;
    }
    System.out.println("average age is " + (float)total/10);
  }
}