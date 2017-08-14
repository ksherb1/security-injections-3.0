public class Overflow {
  public static void main(String[] args) {
    int[] vals = new int[10];

    for (int i =0; i < 20; i++) {
      vals[i] = i;
    }
  }
}