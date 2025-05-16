"use client";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";
import {
  Cloud,
  CloudySnowing,
  Snowing,
  Sunny,
  Thunderstorm,
  WaterDrop,
} from "@mui/icons-material";
import { cities } from "@/app/lib/cities";
import { useContext } from "react";
import { WeatherContext } from "@/app/lib/weather";
import Image from "next/image";

export default function CurrentWeather() {
  const { currentWeather } = useContext(WeatherContext);

  return (
    <Container
      sx={{
        mt: 4,
        mb: 4,
      }}
    >
      <Typography variant="h5" align="center">
        Current Weather
      </Typography>
      <Container
        sx={{
          mt: 4,
          mb: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {cities.map((city, id) => {
          let cityWeather = currentWeather?.[city];
          return (
            <Card key={id} sx={{ width: 345 }}>
              <CardHeader
                avatar={
                  <Avatar>
                    {cityWeather ? (
                      <Image
                        alt={cityWeather?.condition.text}
                        src={"https:" + cityWeather?.condition.icon}
                        width="32"
                        height="32"
                      />
                    ) : (
                      <>
                        {/* <Sunny sx={{ color: "yellow" }} /> */}
                        {/* <Cloud sx={{ color: "white" }} /> */}
                        {/* <CloudySnowing sx={{ color: "white" }} /> */}
                        {/* <Thunderstorm sx={{ color: "white" }} /> */}
                        <WaterDrop sx={{ color: "white" }} />
                      </>
                    )}
                  </Avatar>
                }
                title={city}
                subheader={`Last updated: ${cityWeather?.last_updated ?? "loading..."}`}
              />
              <CardContent>
                {cityWeather?.condition.text}
                <br />
                Temperature: {cityWeather?.temp_c}&deg;C <br />
                Pressure: {cityWeather?.pressure_mb} hPa <br />
                Humidity: {cityWeather?.humidity}%<br />
                Cloud cover: {cityWeather?.cloud}%<br />
                UV Index: {cityWeather?.uv} <br />
                Wind: {cityWeather?.wind_kph} km/h (degree:{" "}
                {cityWeather?.wind_degree}&deg;, direction:{" "}
                {cityWeather?.wind_dir})
                <br />
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </Container>
  );
}
