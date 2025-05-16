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
import { cities } from "@/app/cities";
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          flexDirection: "column",
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
                    <WaterDrop sx={{ color: "skyblue" }} />
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
