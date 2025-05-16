import { Link, Typography } from "@mui/material";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.25em",
      }}
      {...props}
    >
      Copyright &copy; {new Date().getFullYear()}
      <Link href="https://c2yz.com">Michał Czyż</Link>
    </Typography>
  );
}
