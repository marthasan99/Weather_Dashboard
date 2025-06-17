import { useContext, useEffect, useState } from "react";
import { getClimateBackground } from "./assets/climateBackground/climate-backgrounds";
import { Header } from "./components/headers/Header";
import { WeatherBoard } from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

const Pages = () => {
  const { weather, loading } = useContext(WeatherContext);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const backgroundImage = getClimateBackground(
      weather.climate.description,
      weather.climate.main
    );
    // const bgImage = climateBackgrounds[backgroundImage] || climateBackgrounds.default;
    setBackgroundImage(backgroundImage);
  }, [weather.climate]);

  return (
    <>
      {" "}
      {loading.state ? (
        <div className="grid place-items-center h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
            {loading.message}
          </p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${backgroundImage}')` }}
          className="grid place-items-center min-h-screen h-screen bg-no-repeat bg-cover bg-center px-4 sm:px-6 lg:px-8"
        >
          {" "}
          <Header />
          <main className="w-full max-w-7xl mx-auto">
            <section className="px-2 sm:px-4">
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Pages;
