import { useContext } from "react";
import PinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-utils";
export const WeatherHeadline = () => {
  const { weather, loading } = useContext(WeatherContext);

  const { location, temperature, climate, time } = weather;

  return (
    <>
      {" "}
      <div className="col-span-1">
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img
            src={`https://openweathermap.org/img/wn/${climate.icon}@2x.png`}
            alt={climate.description}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-auto md:h-auto"
          />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-4xl sm:text-5xl md:text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4 font-bold">
              {loading.state
                ? loading.message
                : `${Math.round(temperature)}° C`}
            </h1>
            <div className="flex items-center space-x-2 sm:space-x-4 md:mb-4">
              <img
                src={PinIcon}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                alt="Location"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[50px] truncate">
                {location}
              </h2>
            </div>
          </div>
        </div>
        <p className="text-xs sm:text-sm lg:text-lg mt-2 sm:mt-4">
          {getFormattedDate(time, "time", false)} -{" "}
          {getFormattedDate(time, "date", false)}
        </p>
      </div>
    </>
  );
};
