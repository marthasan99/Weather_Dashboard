import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

export const AddToFavourite = () => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const { weather } = useContext(WeatherContext);
  const { latitude, longitude, location, climate } = weather;
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    // Only run this when location is available and favourites is loaded
    if (location) {
      const found = favourites.find((fav) => fav.location === location);
      console.log("found", found);
      setIsFavourite(!!found); // Convert to boolean with !!
    }
  }, [location, favourites]); // Add dependencies to re-run when they change

  const toggleFavourite = () => {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location, climate);
      setIsFavourite(true);
    } else {
      removeFromFavourites(location);
      setIsFavourite(false);
    }
  };

  return (
    <>
      {" "}
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center justify-center sm:justify-end space-x-6">
          <button
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-[#C5C5C54D] hover:bg-[#C5C5C566] transition-colors touch-target"
            onClick={toggleFavourite}
          >
            <span className="hidden sm:inline">Add to Favourite</span>
            <span className="sm:hidden">Favourite</span>
            <img
              src={isFavourite ? RedHeartIcon : HeartIcon}
              alt=""
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
        </div>
      </div>
    </>
  );
};
