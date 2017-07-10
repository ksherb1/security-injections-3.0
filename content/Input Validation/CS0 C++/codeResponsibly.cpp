int ValidNum(int min, int max)
{
    int value;
    cin >> value;
    while ((value < min || value > max))
    {
         cout << "Enter a number between "<< min << " and " << max  << endl;
         cin >> value;
     }
     return value;
}