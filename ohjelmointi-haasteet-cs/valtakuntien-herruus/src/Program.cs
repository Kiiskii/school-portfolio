internal class Program
{
    private static void Main(string[] args)
    {
        /*
        Make a list to easily store the amount of land each player has
        */


        List<Valtakunnat> list = new List<Valtakunnat>();
        Console.Write("How many players? ");
        int players = int.Parse(Console.ReadLine());
        int playerNumber = 1;

        /*
        While loop to ask the user for how many if each type of land players own
        */

        while (playerNumber <= players)
        {
            Console.WriteLine($"How many farms does player {playerNumber} have? ");
            int farms = int.Parse(Console.ReadLine());

            Console.WriteLine($"How many duchies does player {playerNumber} have? ");
            int duchy = int.Parse(Console.ReadLine());

            Console.WriteLine($"How many provinces does player {playerNumber} have? ");
            int province = int.Parse(Console.ReadLine());

            list.Add(new Valtakunnat(farms, duchy, province, playerNumber));
            playerNumber++;
        }

        Console.WriteLine();

        int highestPoints = 0;
        int bestPlayer = 0;

        /*
        Use list to calc how many points each player has and check to see which player has the highest points
        */

        foreach (Valtakunnat item in list)
        {
            Console.WriteLine($"Player {item.playerNumber} points: {item.Sum()}");
            if (item.Sum() > highestPoints)
            {
                highestPoints = item.Sum();
                bestPlayer = item.playerNumber;
            }
        }
        Console.WriteLine();
        Console.WriteLine($"Player {bestPlayer} has the highest points with {highestPoints} points.");
    }
}