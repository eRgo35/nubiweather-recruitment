"use client";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Skeleton,
} from "@mui/material";
import { Cloud } from "@mui/icons-material";
import { cities } from "@/app/lib/cities";
import { useContext } from "react";
import { WeatherContext } from "@/app/lib/weather";
import Image from "next/image";

export default function ForecastWeather() {
  const { forecastWeather } = useContext(WeatherContext);

  return (
    <Container
      sx={{
        mt: 4,
        mb: 4,
      }}
    >
      <Typography variant="h5" align="center">
        3-day Forecast
      </Typography>
      <Container
        sx={{
          mt: 4,
          mb: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {cities.map((city, idx) => {
          let cityWeather = forecastWeather?.[city];
          return cityWeather !== undefined ? (
            cityWeather.map((day, idy) => {
              return (
                <Card key={idx + idy} sx={{ width: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar>
                        {day !== undefined ? (
                          <Image
                            alt={day?.day?.condition?.text ?? "Loading..."}
                            src={"https:" + day?.day?.condition?.icon}
                            width="32"
                            height="32"
                          />
                        ) : (
                          <>
                            {/* <Sunny sx={{ color: "yellow" }} /> */}
                            <Cloud sx={{ color: "white" }} />
                            {/* <CloudySnowing sx={{ color: "white" }} /> */}
                            {/* <Thunderstorm sx={{ color: "white" }} /> */}
                            {/* <WaterDrop sx={{ color: "white" }} /> */}
                          </>
                        )}
                      </Avatar>
                    }
                    title={city}
                    subheader={`${day?.date ?? "loading..."}`}
                  />
                  <CardContent>
                    <Typography variant="h6">
                      {day?.day?.condition?.text} &mdash; {day?.day?.avgtemp_c}
                      &deg;C
                    </Typography>
                    <br />
                    {cityWeather !== null ? (
                      <div>
                        Precipitation: {day?.day?.totalprecip_mm} mm <br />
                        Chance of rain: {day?.day?.daily_chance_of_rain}%<br />
                        Humidity: {day?.day?.avghumidity}%<br />
                        UV Index: {day?.day?.uv} <br />
                        Visibility: {day?.day?.avgvis_km} km
                      </div>
                    ) : (
                      <Skeleton variant="rounded" height={150} />
                    )}
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <></>
          );
        })}
      </Container>
    </Container>
  );
}
