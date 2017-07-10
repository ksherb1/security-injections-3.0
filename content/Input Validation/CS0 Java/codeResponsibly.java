static int getValidNum(int min, int max)
{
      Scanner console = new Scanner(System.in);
      int value =   console.nextInt();
      while ((value < min || value > max))
      {
        System.out.println("Enter number between "+ min + " and " + max);
        value =   console.nextInt();
      }
      return value;
}