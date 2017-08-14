static int validNum(int min, int max)
{
    Scanner scan = new Scanner(System.in);
    int value = scan.nextInt();
    while ((value < min || value > max))
    {
      System.out.println("Enter a number between [" + min + "," + max + "]" );
      value = scan.nextInt();
    }
    return value;
}