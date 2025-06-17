import { useState } from "react";
import { Favourite } from "./Favourite";
import { FavouriteListModal } from "./FavouriteListModal";
import { Logo } from "./Logo";
import { Search } from "./Search";
export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {" "}
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-6 sm:pb-8 lg:pb-10 px-safe pt-safe">
        <nav className="container flex items-center justify-between py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          <Logo />

          <div className="flex items-center gap-2 sm:gap-4 relative">
            <Search />
            <Favourite toggleModal={toggleModal} />
            <FavouriteListModal showModal={showModal} />
          </div>
        </nav>
      </header>
    </>
  );
};
