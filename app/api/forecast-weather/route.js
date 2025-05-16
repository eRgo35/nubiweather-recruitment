import { cities } from "@/app/lib/cities";

export async function GET(request) {
  let days = new URL(request.url).searchParams.get("days");

  if (parseInt(days) === NaN || days === null) {
    days = 1;
  }

  const apiKey = process.env.WEATHER_API_KEY;
  const baseUrl = process.env.WEATHER_API_URL;
  const weatherResponses = {};

  try {
    for (let city of cities) {
      const apiUrl = `${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=${days}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`External API error: ${errorText}`);
      }

      const { forecast } = await response.json();
      const { forecastday } = forecast;

      let results = forecastday.map((result) => {
        // console.log({ date: result.date, day: result.day });
        return { date: result.date, day: result.day };
      });

      weatherResponses[city] = results;
    }

    console.log(weatherResponses);

    return new Response(
      JSON.stringify(weatherResponses, {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
  } catch (error) {
    console.error(`API route error: ${error}`);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
