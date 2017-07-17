import java.io.*;  // for File
import java.util.*;  // for Scanner
public class ReadTemps
{
    public static void main (String[] args) throws FileNotFoundException
    {
      Scanner inFile = new Scanner(new File("temps.txt"));  //open
      double[] temps = new double[10];
      int numTemps = 0;

      while (inFile.hasNextDouble())
      {
        temps[numTemps] = inFile.nextDouble();
        numTemps++;
      }
      System.out.println(numTemps + " temperatures were read.");

    }
}