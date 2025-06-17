import { AddToFavourite } from "./AddToFavourite";
import { WeatherCondition } from "./WeatherCondition";
import { WeatherHeadline } from "./WeatherHeadline";

export const WeatherBoard = () => {
  return (
    <>
      {" "}
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 sm:px-6 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-6">
            <AddToFavourite />
            <WeatherHeadline />
            <WeatherCondition />
          </div>
        </div>
      </div>
    </>
  );
};
