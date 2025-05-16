import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Wrapper from "@/components/Wrapper";

const pageTitle = "NubiWeather";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Wrapper title={pageTitle}>{children}</Wrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
