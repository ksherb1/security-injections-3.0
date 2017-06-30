import java.util.Scanner;

public class IntegerCheck {
  
  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);
    int i;
    byte b;
    short sh;
    long lon;

    System.out.println("Valid integer is between "
      + Integer.MIN_VALUE + " and " + Integer.MAX_VALUE );
    System.out.println("Valid byte is between "
      + Byte.MIN_VALUE + " and " + Byte.MAX_VALUE );
    System.out.println("Valid short is between "
      + Short.MIN_VALUE + " and " + Short.MAX_VALUE );
    System.out.println("Valid long is between "
      + Long.MIN_VALUE + " and " + Long.MAX_VALUE );

    System.out.print("Type an integer value: ");
    i = scan.nextInt();
    System.out.print("Type a byte value: ");
    b = scan.nextByte();
    System.out.print("Type a short value: ");
    sh = scan.nextShort();
    System.out.print("Type a long value: ");
    lon = scan.nextLong();

    System.out.println("\nYou entered the following values: ");
    System.out.println("Integer: " + i);
    System.out.println("Byte: " + b);
    System.out.println("Short: " + sh);
    System.out.println("Long: " + lon);

    short newsh = (short)(sh * 10);
    System.out.println("Ten times " + sh + " is " + newsh);
    i = Integer.MAX_VALUE + 1;
    System.out.println("Integer Overflow: "
      + Integer.MAX_VALUE + " + 1 = " + i);

  }

}