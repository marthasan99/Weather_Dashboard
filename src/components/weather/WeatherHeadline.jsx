import { useContext } from "react";
import PinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-utils";
export const WeatherHeadline = () => {
  const { weather, loading } = useContext(WeatherContext);

  const { location, temperature, climate, time } = weather;

  return (
    <>
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img
            src={`https://openweathermap.org/img/wn/${climate.icon}@2x.png`}
            alt={climate.description}
          />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
              {loading.state
                ? loading.message
                : `${Math.round(temperature)}° C`}
            </h1>
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={PinIcon} />
              <h2 className="text-2xl lg:text-[50px]">{location}</h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg">
          {getFormattedDate(time, "time", false)} -{" "}
          {getFormattedDate(time, "date", false)}
        </p>
      </div>
    </>
  );
};
