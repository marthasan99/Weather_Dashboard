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
      {loading.state ? (
        <div className="grid place-items-center h-screen bg-gray-100">
          <p className="text-lg font-semibold ">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${backgroundImage}')` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover bg-center"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Pages;
