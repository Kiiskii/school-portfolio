internal partial class Program
{
    private static void Main(string[] args)
    {

        Console.Title = "Ritariryhmä liikkeelle";

        Console.WriteLine("Starting position (8x8 board) Row 6, Column 5");


        while (true)
        {
            Console.Write("Target row? ");
            var rivi = Console.ReadLine();
            Console.Write("Target column? ");
            var sarake = Console.ReadLine();
            Console.WriteLine("Send the knights.");

            var maxRivi = 8;
            var maxSarake = 8;
            var minRivi = 1;
            var minSarake = 1;

        }
    }
    public void GetPosition(int rivi, int sarake)
    {

    }
}