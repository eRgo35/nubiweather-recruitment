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

export default function Wrapper({ title, children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
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

    retrieveRealtime();
    retrieveForecast({ days: 3 });

    console.log("Done!");
    setIsLoading(false);
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
          {isLoading ? <LinearProgress /> : <></>}
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
