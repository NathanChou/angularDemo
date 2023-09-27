using Microsoft.AspNetCore.Mvc;

namespace mod09API.Controllers;

[ApiController]
[Route("wf")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpGet("{id}")]
    public ActionResult<string> Get(int id) {
        if (id >= Summaries.Length)
            return NotFound();
        return Summaries[id];
    }


    [HttpGet("bydate/{year}/{month}/{day}")]
    public ActionResult<string>Get(int year, int month, int day) {
        return (new DateTime(year, month, day)).ToString();
    }

    [HttpGet("{a}/{b}/{c}")]
    public ActionResult<string>Get(string a, string b, string c) {
        return "{a}/{b}/{c}";
    }


    [HttpPost()]
    public ActionResult<string>POST(WeatherForecast wf) {
        var result = $"POST>Date:{wf.Date},C:{wf.TemperatureC},F:{wf.TemperatureF},Summary{wf.Summary}";

        Console.WriteLine(result);
        return result;
    }
}
