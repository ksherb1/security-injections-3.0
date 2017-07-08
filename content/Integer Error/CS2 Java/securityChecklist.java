import java.util.Scanner;

public class PopCheck {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.print("What is the current population? ");
    short pop = scan.nextShort();
    System.out.print("What is the rate of growth?
                     (e.g., for 10% enter 10) ");
    short growth = scan.nextShort();
    float growthRate = growth / 100f;
    System.out.println("Year\tGrowth\tNew Population");
    for (int i = 1; i <= 10; i++) {
      short increase = (short) (pop * growthRate);
      short newpop = (short) (pop + increase);
      System.out.println(i+"\t"+increase+"\t" + newpop);
      pop = newpop;
    }
    System.err.println("Final population is " + pop);
  }
}