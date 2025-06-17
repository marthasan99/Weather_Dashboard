import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";
const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  console.log("favourites", favourites);

  const addToFavourites = (latitude, longitude, location, climate) => {
    setFavourites((prevFavourites) => [
      ...prevFavourites,
      { latitude, longitude, location, climate },
    ]);
  };

  const removeFromFavourites = (location) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((fav) => fav.location !== location)
    );
  };
  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
