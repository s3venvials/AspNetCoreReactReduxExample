using System;

namespace API
{
    public class WeatherForecast
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF { get; set; }

        public string Summary { get; set; }
    }
}

//=> 32 + (int)(TemperatureC / 0.5556);