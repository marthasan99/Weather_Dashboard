import { useContext } from "react";
import PinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-utils";
export const WeatherHeadline = () => {
  const { weather, loading } = useContext(WeatherContext);

  const location = weather?.location || "";
  const temperature = weather?.temperature;
  const climate = weather?.climate || {};
  const time = weather?.time;

  return (
    <>
      <div>
        <div className="flex flex-col  items-center justify-between lg:-mt-10 lg:space-x-12 xl:space-x-24">
          {climate.icon && (
            <img
              src={`https://openweathermap.org/img/wn/${climate.icon}@2x.png`}
              alt={climate.description || "weather icon"}
              className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
            />
          )}
          <div className="flex flex-col max-md:space-y-4 lg:items-center">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none mb-4 lg:mb-0">
              {loading.state
                ? loading.message
                : temperature !== undefined
                ? `${Math.round(temperature)}°C`
                : "--"}
            </h1>
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <img src={PinIcon} alt="Location Pin" className="w-6 h-6" />
              <h2 className="text-2xl lg:text-[50px]">{location}</h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg mt-4">
          {time
            ? `${getFormattedDate(time, "time", false)} - ${getFormattedDate(
                time,
                "date",
                false
              )}`
            : ""}
        </p>
      </div>
    </>
  );
};
