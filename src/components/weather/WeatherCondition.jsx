import { useContext } from "react";
import CloudIcon from "../../assets/icons/cloud.svg";
import HumidityIcon from "../../assets/icons/humidity.svg";
import TempMaxIcon from "../../assets/icons/temp-max.svg";
import TempMinIcon from "../../assets/icons/temp-min.svg";
import WindIcon from "../../assets/icons/wind.svg";
import { WeatherContext } from "../../context";
export const WeatherCondition = () => {
  const { weather } = useContext(WeatherContext);
  const {
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    windSpeed,
    climate,
  } = weather;
  return (
    <>
      {" "}
      <div className="col-span-1">
        <p className="text-sm sm:text-base lg:text-lg font-bold uppercase mb-6 sm:mb-8">
          {climate.description}
        </p>
        <ul className="space-y-4 sm:space-y-6 lg:space-y-6">
          <li className="text-sm sm:text-base lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp max</span>
            <div className="inline-flex space-x-2 sm:space-x-4 items-center">
              <p className="font-medium">{maxTemperature}°</p>
              <img
                src={TempMaxIcon}
                alt="temp-max"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
          </li>
          <li className="text-sm sm:text-base lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp min</span>
            <div className="inline-flex space-x-2 sm:space-x-4 items-center">
              <p className="font-medium">{minTemperature}°</p>
              <img
                src={TempMinIcon}
                alt="temp-min"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
          </li>
          <li className="text-sm sm:text-base lg:text-lg flex items-center justify-between space-x-4">
            <span>Humidity</span>
            <div className="inline-flex space-x-2 sm:space-x-4 items-center">
              <p className="font-medium">{humidity}%</p>
              <img
                src={HumidityIcon}
                alt="humidity"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
          </li>
          <li className="text-sm sm:text-base lg:text-lg flex items-center justify-between space-x-4">
            <span>Cloudy</span>
            <div className="inline-flex space-x-2 sm:space-x-4 items-center">
              <p className="font-medium">{cloudPercentage}%</p>
              <img
                src={CloudIcon}
                alt="cloudy"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
          </li>
          <li className="text-sm sm:text-base lg:text-lg flex items-center justify-between space-x-4">
            <span>Wind</span>
            <div className="inline-flex space-x-2 sm:space-x-4 items-center">
              <p className="font-medium">{windSpeed}km/h</p>
              <img
                src={WindIcon}
                alt="wind"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
