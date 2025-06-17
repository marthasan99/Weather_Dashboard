import { useContext } from "react";
import { FavouriteContext } from "../../context";
export const FavouriteListModal = ({ showModal }) => {
  const { favourites } = useContext(FavouriteContext);
  return (
    <>
      {showModal && (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
          <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
          <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
            {favourites.length === 0 ? (
              <li className="text-gray-500 text-center">No favourites added</li>
            ) : (
              favourites.map((fav, index) => (
                <li
                  key={index}
                  className="hover:bg-gray-500 bg-black/20"
                >
                  <img
                    src={`https://openweathermap.org/img/wn/${fav.climate.icon}@2x.png`}
                    alt={fav.climate.description}
                    className="inline-block w-6 h-6 mr-2"
                  />
                  {fav.location}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};
