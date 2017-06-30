import java.util.Scanner;

public class IntegerCheck {

  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);
    int i;
    byte b;
    short sh;
    long lon;
    
    System.out.println("Valid integer is between " + Integer.MIN_VALUE + " and " + Integer.MAX_VALUE );
    System.out.println("Valid byte    is between " + Byte.MIN_VALUE + " and " + Byte.MAX_VALUE );
    System.out.println("Valid short   is between " + Short.MIN_VALUE + " and " + Short.MAX_VALUE );
    System.out.println("Valid long    is between " + Long.MIN_VALUE + " and " + Long.MAX_VALUE );
  }
}