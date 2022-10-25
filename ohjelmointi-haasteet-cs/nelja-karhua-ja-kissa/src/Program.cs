internal class Program
{
    static int bears = 4;
    private static void Main(string[] args)
    {
        List<int> list = new List<int>();
        Console.WriteLine("How many fish did the bears catch?");

        int fish = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine($"The bears get {BearFish(fish)} fish each");
        Console.WriteLine($"The cat gets {CatFish(fish)} fish");
        Console.WriteLine("");

        /*
        Add functionality to check at what amounts of fish, the cat gets more than the bears.
        Because there are 4 bears, the maximum amount of fish where the cat can have more is 4x4=16.
        */

        for (int i = 0; i < 16; i++)
        {

            if (CatFish(i) > BearFish(i))
            {
                list.Add(i);
            }
        }

        /*
        Ask if the user wants to know when the cat gets more fish than the bears.
        */


        Console.WriteLine("Do you want to know when the cat gets more fish thn the bears?");

        while (true)
        {
            Console.Write("y/n: ");
            string? yesNo = Console.ReadLine();
            if (yesNo == "y")
            {
                Console.WriteLine($"When the bears catch {string.Join(", ", list)} fish, the cat get more fish");
                break;
            }
            else if (yesNo == "n") break;
            else Console.WriteLine("Wrong input");

        }
    }

    /*
    Add Methods to execute the calculations of how many fish the bears and cat gets.
    */

    private static int BearFish(int fish)
    {
        int fishForBears = fish / bears;
        return fishForBears;
    }

    private static int CatFish(int fish)
    {
        int fishForCat = fish % bears;
        return fishForCat;
    }


}