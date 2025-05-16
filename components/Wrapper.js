"use client";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  LinearProgress,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "@/app/lib/theme";
import { Brightness4, Brightness7, Refresh } from "@mui/icons-material";
import { getCookie, setCookie } from "cookies-next";
import { retrieveForecast, retrieveRealtime } from "@/app/lib/fetcher";
import { WeatherContext } from "@/app/lib/weather";

export default function Wrapper({ title, children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const theme = darkMode ? darkTheme : lightTheme;
  useEffect(() => {
    const stored = getCookie("dark");
    setDarkMode(stored !== "false");
    fetchWeather();
  }, []);

  const toggleColorMode = () => {
    setCookie("dark", !darkMode);
    setDarkMode(!darkMode);
  };

  const fetchWeather = () => {
    setIsLoading(true);
    console.log("Loading latest weather reports...");

    setCurrentWeather(retrieveRealtime());
    setForecastWeather(retrieveForecast({ days: 3 }));

    // better UX
    setTimeout(() => setIsLoading(false), 500);

    console.log("Done!");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar position="absolute">
          <Toolbar>
            <Typography component="h1" variant="h6" noWrap sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={fetchWeather}>
              <Refresh />
            </IconButton>
            <IconButton sx={{ ml: 1 }} onClick={toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}
        >
          <Toolbar />
          {isLoading ? <LinearProgress position="absolute" /> : <></>}
          <WeatherContext.Provider
            value={{
              currentWeather,
              setCurrentWeather,
              forecastWeather,
              setForecastWeather,
            }}
          >
            {children}
          </WeatherContext.Provider>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
