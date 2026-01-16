import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const { page } = useParams();

  useEffect(() => {
    // This is where your code goes
    const backgroundColor = document.getElementById("page-wrap");
    if (!backgroundColor) return;

    const className = "menu" + page;

    // Add class
    backgroundColor.classList.add(className);

    // Cleanup: remove class when component unmounts or page changes
    return () => {
      backgroundColor.classList.remove(className);
    };
  }, [page]); // <-- dependency on page

  const handleClose = () => {
    if (page === "home") {
      navigate(`/`);
    } else {
      navigate(`/${page}`);
    }
  };

  const handleClick = (loc) => {
    if (loc === "home") {
      navigate(`/`);
    } else {
      navigate(`/${loc}`);
    }
  };

  return (
    <>
      {/* nav */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[95%] flex justify-between items-center z-50">
        <div
          className="flex items-center gap-2 sm:gap-3 "
          onClick={handleClose}
        >
          <img
            src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768584962/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24_uveidu.png"
            alt=""
            className="w-full max-w-12.5 h-auto"
          />
          <h1 className="text-md sm:text-base md:text-lg font-bold cursor-pointer">
            Close
          </h1>
        </div>
        <h1 className="text-md sm:text-base md:text-lg font-bold">
          LET'S BUILD TOGETHER!
        </h1>
      </div>

      {/* social media */}
      <div className="flex gap-4 mt-15 ml-6">
        <a
          href="https://www.facebook.com/vaughnjoshua.bermundo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768583006/facebook_kqjlfs.png"
            alt="facebook logo"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </a>
        <a
          href="https://www.instagram.com/vaughnjoshuab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768583006/instagram_sbnoz5.png"
            alt="instagram logo"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </a>
        <a
          href="https://github.com/vaughn-joshua"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768583005/github-sign_eemd2a.png"
            alt="github logo"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </a>
      </div>

      {/* menu sections */}
      <div className="flex flex-col mt-10 ml-6 gap-15">
        <div className="menu-item" onClick={() => handleClick("home")}>
          <h1 className="text-5xl md:text-7xl font-bold w-120">Home</h1>
          <span className="hidden sm:block text-base font-semibold md:text-lg text-gray-800">
            Back to the home page.
          </span>
        </div>
        <div className="menu-item" onClick={() => handleClick("project")}>
          <h1 className="text-5xl md:text-7xl font-bold w-120">Project</h1>
          <span className="hidden sm:block text-base font-semibold md:text-lg text-gray-800">
            My latest works.
          </span>
        </div>
        <div className="menu-item" onClick={() => handleClick("experience")}>
          <h1 className="text-5xl md:text-7xl font-bold w-120">Experience</h1>
          <span className="hidden sm:block text-base font-semibold md:text-lg text-gray-800">
            Non-Tech Related Experience.
          </span>
        </div>
        <div className="menu-item" onClick={() => handleClick("about")}>
          <h1 className="text-5xl md:text-7xl font-bold w-120">About</h1>
          <span className="hidden sm:block text-base font-semibold md:text-lg text-gray-800">
            A little about me and my background.
          </span>
        </div>
      </div>
    </>
  );
}

export default Menu;
