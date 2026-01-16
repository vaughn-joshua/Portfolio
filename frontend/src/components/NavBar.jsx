function NavBar() {
  return (
    <div
      //     <div className="flex justify-between items-center bg-amber-200 p-5 fixed top-4 left-6 w-[97%] z-50">

      className="
      fixed top-6 left-1/2 -translate-x-1/2
      w-[90%] md:w-[95%]
      flex justify-between items-center
      z-100"
    >
      <div className="flex items-center gap-2 sm:gap-3 ">
        <img
          src="https://placehold.co/70x70"
          alt=""
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <h1 className="text-md sm:text-base md:text-lg font-bold">MENU</h1>
      </div>
      <h1 className="text-md sm:text-base md:text-lg font-bold">HIRE ME</h1>
    </div>
  );
}

export default NavBar;
