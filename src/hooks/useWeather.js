import { useCallback, useEffect, useState } from "react";
const useWeather = () => {
  const [weather, setWeather] = useState({
    location: "",
    temperature: "",
    climate: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    windSpeed: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "Loading...",
  });
  const [error, setError] = useState(null);
  const fetchWeatherData = useCallback((latitude, longitude) => {
    setLoading({
      state: true,
      message: "Loading Weather Data...",
    });
    fetch(
      (() => {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      })()
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetching weather data failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const updatedWeatherData = {
          ...weather,
          location: data.name,
          temperature: data.main.temp,
          climate: data.weather[0],
          maxTemperature: data.main.temp_max,
          minTemperature: data.main.temp_min,
          humidity: data.main.humidity,
          cloudPercentage: data.clouds.all,
          windSpeed: data.wind.speed,
          time: data.dt,
          longitude: longitude,
          latitude: latitude,
        };
        setWeather(updatedWeatherData);
        setLoading({
          state: false,
          message: "Weather Data Loaded",
        });
      })
      .catch((err) => {
        setError(err);
        setLoading({ state: false, message: "" });
      });
  }, []);

  useEffect(() => {
    setLoading({ state: true, message: "Fetching Location..." });
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      fetchWeatherData(latitude, longitude);
    });
  }, [fetchWeatherData]);

  return { weather, loading, error };
};
export default useWeather;
