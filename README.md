# Nubiweather Recruitment

A fullstack Next.js weather web app for Nubisoft recruitment exerecise.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<img src="image.png" alt="Website" width="700"/>

The website shows current weather and a 3-day forecast for Gliwice and Hamburg. Web Application calls its own backend API to communicate with the external API server.

You can visit the website here: [https://weather.c2yz.com](https://weather.c2yz.com)

## Getting Started

You need to create a `.env` file in the root directory of the project with the following content:

```
WEATHER_API_KEY=<YOUR_API_KEY>
WEATHER_API_URL=https://api.weatherapi.com/v1
```

Where `WEATHER_API_KEY` is your API key from [WeatherAPI](https://www.weatherapi.com/).

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building

To build the production version:

```bash
pnpm build

# to run built version locally on localhost:3000
pnpm start
```

## API Routes

```
GET /api/realtime-weather ~ returns current weather for Glwice and Hamburg

GET /api/forecast-weather?days=%i ~ returns forecast for i number of days for Gliwice and Hamburg (days parameter defaults to 1)
```

## Frontend

Frontend has been built using NextJS and MUI framework. Uses context for managing weather data, has support for light and dark mode and displays documents from markdown files.
