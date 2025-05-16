import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import Copyright from "@/components/Copyright";
import { cities } from "@/app/lib/cities";
import {
  Cloud,
  CloudySnowing,
  Snowing,
  Sunny,
  Thunderstorm,
  WaterDrop,
} from "@mui/icons-material";

export default function Home() {
  let lastUpdated = "10 mins ago";

  return (
    <>
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
            return (
              <Card key={id} sx={{ width: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar>
                      {/* <Sunny sx={{ color: "yellow" }} /> */}
                      {/* <Cloud sx={{ color: "white" }} /> */}
                      {/* <CloudySnowing sx={{ color: "white" }} /> */}
                      {/* <Thunderstorm sx={{ color: "white" }} /> */}
                      <WaterDrop sx={{ color: "white" }} />
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
      <Typography variant="h5" align="center">
        Learn more!
      </Typography>
      <Container
        sx={{
          mt: 4,
          mb: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: 724 }}>
          <CardHeader title="Call the API yourself!" />
          <CardContent></CardContent>
        </Card>
      </Container>
      <Copyright />
    </>
  );
}
