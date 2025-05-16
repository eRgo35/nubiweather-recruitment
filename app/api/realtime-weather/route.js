import { cities } from "@/app/lib/cities";

export async function GET() {
  const apiKey = process.env.WEATHER_API_KEY;
  const baseUrl = process.env.WEATHER_API_URL;
  const weatherResponses = {};

  try {
    for (let city of cities) {
      const apiUrl = `${baseUrl}/current.json?key=${apiKey}&q=${city}`;

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

      const { current } = await response.json();
      const {
        last_updated,
        temp_c,
        condition,
        wind_kph,
        wind_degree,
        wind_dir,
        pressure_mb,
        humidity,
        cloud,
        uv,
      } = current;

      weatherResponses[city] = {
        last_updated,
        temp_c,
        condition,
        wind_kph,
        wind_degree,
        wind_dir,
        pressure_mb,
        humidity,
        cloud,
        uv,
      };
    }

    // console.log(weatherResponses);

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
