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

export default function ForecastWeather() {
  let lastUpdated = "5 mins ago";
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
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {cities.map((city, id) => {
          return (
            <Card key={id} sx={{ width: 345 }}>
              <CardHeader
                avatar={
                  <Avatar>
                    <Sunny sx={{ color: "yellow" }} />
                    {/* <Cloud sx={{ color: "white" }} /> */}
                    {/* <CloudySnowing sx={{ color: "white" }} /> */}
                    {/* <Thunderstorm sx={{ color: "white" }} /> */}
                    {/* <WaterDrop sx={{ color: "white" }} /> */}
                  </Avatar>
                }
                title={city}
                subheader={`Last updated: ${lastUpdated}`}
              />
              <CardContent>Some content</CardContent>
            </Card>
          );
        })}
      </Container>
    </Container>
  );
}
