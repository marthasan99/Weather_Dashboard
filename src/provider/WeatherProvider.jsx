import { WeatherContext } from "../context";
import useWeather from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const { weather, error, loading, climate } = useWeather();

  return (
    <WeatherContext.Provider value={{ weather, error, loading, climate }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
