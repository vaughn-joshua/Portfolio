import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const location = useLocation(); // gives you the current location object
  const currentPath = location.pathname; // the current URL path

  const handleClick = () => {
    let lastSegment = currentPath.split("/").filter(Boolean).pop(); // gets "home"
    if (lastSegment == undefined) {
      lastSegment = "home";
    }
    navigate(`/menu/${lastSegment}`);
  };

  return (
    <div
      className="
      fixed top-6 left-1/2 -translate-x-1/2
      w-[90%] md:w-[95%]
      flex justify-between items-center
      z-100"
    >
      <div className="flex items-center gap-2 sm:gap-3 " onClick={handleClick}>
        <img
          src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768584962/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24_uveidu.png"
          alt=""
          className="w-full max-w-12.5 h-auto"
        />
        <h1 className="text-md sm:text-base md:text-lg font-bold">MENU</h1>
      </div>
      <h1 className="text-md sm:text-base md:text-lg font-bold">
        LET'S BUILD TOGETHER!
      </h1>
    </div>
  );
}

export default NavBar;
