"use client";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";
import Docs from "@/app/docs.mdx";

export default function LearnMore() {
  return (
    <>
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
          {/* <CardHeader title="Call the API yourself!" /> */}
          <CardContent>
            <Docs />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
