import Copyright from "@/components/Copyright";
import CurrentWeather from "@/components/CurrentWeather";
import ForecastWeather from "@/components/ForecastWeather";
import LearnMore from "@/components/LearnMore";

export default function Home() {
  return (
    <>
      <CurrentWeather />
      <ForecastWeather />
      <LearnMore />
      <Copyright />
    </>
  );
}
