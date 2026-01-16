import { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();

  useEffect(() => {
    const backgroundColor = document.getElementById("page-wrap");

    if (backgroundColor) {
      backgroundColor.className = "";

      backgroundColor.classList.add("page-wrap");
      backgroundColor.classList.add("Project");
    }

    console.log(backgroundColor);
  }, []);

  return (
    <>
      <NavBar />

      {/* title */}
      <div className="md:px-[6%] flex flex-col md:flex-row gap-10 ">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-tight mt-5 hover-white">
          Projects
        </h1>
      </div>

      {/* projects */}
      <div>
        {/* TravelEase */}
        <div className="grid grid-cols-1 md:grid-cols-6 items-stretch gap-y-10 gap-x-5 py-12">
          {/* Left spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Image */}
          <div className="md:col-span-2 h-full flex">
            <img
              src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768588948/Screenshot_2026-01-17_024214_q20kcu.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-3 space-y-4">
            <a href="https://www.travelease.app/" target="./">
              <h1 className="text-3xl font-bold md:text-lg lg:text-2xl leading-snug hover-white hover-underline">
                TravelEase: A Portal for Travel Planning and Tourism Promotion
                in Tagaytay
              </h1>
            </a>

            <div className="flex gap-2 flex-wrap">
              <p className="Technology">PostgreSQL</p>
              <p className="Technology">Supabase</p>
              <p className="Technology">React</p>
              <p className="Technology">Tailwind</p>
              <p className="Technology">Node.js</p>
              <p className="Technology">Express.js</p>
              <p className="Technology">Google Cloud Platform</p>
            </div>

            <p className="text-sm leading-relaxed">
              Web-based system featuring collaborative itineraries, interactive
              maps, business listings, and user-generated reviews to enhance
              tourist decision-making and promote local destinations.
            </p>

            <p className="text-sm">
              <span className="font-semibold">Contribution:</span> Project
              Manager & Core Developer; system planning, database and workflow
              design, feature implementation, testing, and project defense.
            </p>

            <p className="text-sm">
              <span className="font-semibold">Key Tools:</span> React Leaflet,
              OpenStreetMap, Nominatim API, Google Maps APIs, Supabase Storage,
              Vercel, Railway
            </p>
          </div>
        </div>

        {/* Andy's Order and Menu */}
        <div className="grid grid-cols-1 md:grid-cols-6 items-stretch gap-y-10 gap-x-5 py-12">
          <div className="hidden md:block md:col-span-1" />

          {/* Left (image) – 40% */}
          <div className="md:col-span-2 h-full flex">
            <img
              src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768587712/Screenshot_2026-01-17_022108_ao5xgr.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right (text) – 60% */}
          <div className="md:col-span-3 space-y-4">
            <a
              href="https://github.com/vaughn-joshua/Order---Menu-System.git"
              target="./"
            >
              <h1 className="text-3xl font-bold md:text-lg lg:text-2xl leading-snug hover-white hover-underline">
                Andy’s Order & Menu System
              </h1>
            </a>

            <div className="flex gap-2 flex-wrap">
              <p className="Technology">Express.js</p>
              <p className="Technology">Vanilla JavaScript</p>
              <p className="Technology">HTML</p>
              <p className="Technology">CSS</p>
              <p className="Technology">Bootstrap</p>
              <p className="Technology">Google Cloud Platform</p>
            </div>

            <p className="text-sm leading-relaxed">
              A two-module web system for a local food business, enabling
              customers to view the menu and place orders, and business owners
              to track and manage orders efficiently.
            </p>

            <p className="text-sm">
              <span className="font-semibold">Contribution:</span> Project
              Manager and lead developer; planned system modules and workflows,
              designed database structure in Google Sheets
            </p>

            <p className="text-sm">
              <span className="font-semibold">Key Tools:</span> Google Sheets
              Database (relational structure with multiple tables), Google
              Sheets API
            </p>
          </div>
        </div>

        {/* Student Management System */}
        <div className="grid grid-cols-1 md:grid-cols-6 items-stretch gap-y-10 gap-x-5 py-12">
          {/* Left spacer (empty) */}
          <div className="hidden md:block md:col-span-1" />

          {/* Middle (image) */}
          <div className="md:col-span-2 h-full flex">
            <img
              src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768588948/Screenshot_2026-01-17_024041_qq6ggp.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right (text) */}
          <div className="md:col-span-3 space-y-4">
            <h1 className="text-3xl font-bold md:text-lg lg:text-2xl leading-snug hover-white hover-underline">
              Student Management System
            </h1>

            <div className="flex gap-2 flex-wrap">
              <p className="Technology">Java</p>
              <p className="Technology">MySQL</p>
            </div>

            <p className="text-sm leading-relaxed">
              Developed using Java for the application interface and MySQL as
              the backend database, tailored for my alma mater, the
              Technological University of the Philippines (TUP).
            </p>
          </div>
        </div>

        {/* MyWordle */}
        <div className="grid grid-cols-1 md:grid-cols-6 items-stretch gap-y-10 gap-x-5 py-12">
          {/* Left spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Image */}
          <div className="md:col-span-2 h-full flex">
            <img
              src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768589205/Screenshot_2026-01-17_024519_eovkhn.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-3 space-y-4">
            <a href="https://wordle-seven-psi.vercel.app/" target="./">
              <h1 className="text-3xl font-bold md:text-lg lg:text-2xl leading-snug hover-white hover-underline">
                MyWordle
              </h1>
            </a>

            <div className="flex gap-2 flex-wrap">
              <p className="Technology">TypeScript</p>
              <p className="Technology">React</p>
              <p className="Technology">Express</p>
              <p className="Technology">Random Word API</p>
            </div>

            <p className="text-sm leading-relaxed">
              A web-based Wordle clone where users guess a hidden word with
              limited attempts and receive real-time feedback on letter
              positions.
            </p>

            <p className="text-sm">
              Built as a learning project to strengthen skills in React,
              TypeScript, and frontend–backend integration.
            </p>
          </div>
        </div>

        {/* Figma - Budgeting App */}
        <div className="grid grid-cols-1 md:grid-cols-6 items-start gap-y-10 gap-x-5 py-12">
          {/* Left spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Image */}
          <div className="md:col-span-2 flex items-start">
            <img
              src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768589205/Screenshot_2026-01-17_024628_lghkh6.jpg"
              alt=""
              className="w-full max-h-55 object-contain rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-3 space-y-4">
            <a
              href="https://www.figma.com/proto/n4UyToWp3stdAYn9785fZE/Cash-Budgeting-App?node-id=22-7&node-type=canvas&t=XEOj36jeAoUru5tS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=218%3A85&show-proto-sidebar=1"
              target="./"
            >
              <h1 className="text-3xl font-bold md:text-lg lg:text-2xl leading-snug hover-white hover-underline">
                Cash Budgeting App
              </h1>
            </a>

            <div className="flex gap-2 flex-wrap">
              <p className="Technology">Figma</p>
            </div>

            <p className="text-sm leading-relaxed">
              Save It! is a cash budgeting app prototype designed in Figma,
              created to practice UI/UX design principles such as layout,
              usability, and visual clarity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
