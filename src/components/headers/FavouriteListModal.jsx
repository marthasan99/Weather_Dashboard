import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../../context";

export const FavouriteListModal = ({ showModal }) => {
  const { favourites } = useContext(FavouriteContext);
  const { setSelectedLocation } = useContext(LocationContext);

  const handleLocationSelect = (fav) => {
    // Convert favourite structure to location structure
    const locationData = {
      location: fav.location,
      lat: fav.latitude,
      lon: fav.longitude,
    };
    setSelectedLocation(locationData);
  };

  return (
    <>
      {showModal && (
        <div className="max-w-xs sm:max-w-sm py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg z-50 mx-4 sm:mx-0">
          <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
          <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer max-h-64 overflow-y-auto">
            {favourites.length === 0 ? (
              <li className="text-gray-500 text-center text-sm">
                No favourites added
              </li>
            ) : (
              favourites.map((fav, index) => (
                <li
                  key={index}
                  className="hover:bg-gray-200 cursor-pointer touch-target"
                  onClick={() => handleLocationSelect(fav)}
                >
                  <div className="flex items-center">
                    <img
                      src={`https://openweathermap.org/img/wn/${fav.climate.icon}@2x.png`}
                      alt={fav.climate.description}
                      className="inline-block w-6 h-6 mr-2 flex-shrink-0"
                    />
                    <span className="text-sm sm:text-base truncate">
                      {fav.location}
                    </span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};
