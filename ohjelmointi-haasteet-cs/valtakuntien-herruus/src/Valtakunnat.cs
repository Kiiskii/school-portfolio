using System;
public class Valtakunnat
{
    public int farms { get; set; }
    public int duchy { get; set; }
    public int province { get; set; }

    public int playerNumber { get; set; }

    public Valtakunnat(int farms, int duchy, int province, int playerNumber)
    {
        this.farms = farms;
        this.duchy = duchy;
        this.province = province;
        this.playerNumber = playerNumber;
    }

    public int Sum()
    {
        int sum = this.farms * 1 + this.duchy * 3 + this.province * 6;
        return sum;
    }
}