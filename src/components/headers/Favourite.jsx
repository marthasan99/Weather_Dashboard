import Heart from "../../assets/heart.svg";
export const Favourite = ({ toggleModal }) => {
  return (
    <>
      {" "}
      <div
        className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all touch-target"
        onClick={toggleModal}
      >
        <img src={Heart} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:inline text-sm sm:text-base">
          Favourite Locations
        </span>
        <span className="sm:hidden text-sm">Favourites</span>
      </div>
    </>
  );
};
