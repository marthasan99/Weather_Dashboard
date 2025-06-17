import LogoImage from "../../assets/logo.svg";
export const Logo = () => {
  return (
    <>
      {" "}
      <a href="./index.html" className="block">
        <img
          className="h-7 sm:h-8 md:h-9 transition-all"
          src={LogoImage}
          alt="Weather App"
        />
      </a>
    </>
  );
};
