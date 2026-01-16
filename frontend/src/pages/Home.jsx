import { useEffect } from "react";
import NavBar from "../components/NavBar";

function Home() {
  useEffect(() => {
    const backgroundColor = document.getElementById("page-wrap");

    if (backgroundColor) {
      backgroundColor.className = "";

      backgroundColor.classList.add("page-wrap");
      backgroundColor.classList.add("Home");
    }

    console.log(backgroundColor);
  }, []);

  return (
    <div className="Home ">
      <NavBar />

      {/* HERO */}
      <div
        className="
        pt-25
        sm:pt-10
        md:pt-11
        px-[6%]  /* horizontal padding to match skills */
        flex flex-col-reverse md:flex-row
        items-center
        md:gap-16
        max-w-7xl
        mx-auto  /* centers the hero container */
        "
      >
        {/* Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight mt-10 md:mt-15 hover-white">
            Hello, I'm <span className="font-bold">Vaughn Joshua</span>
          </h1>

          <p className="hidden md:block text-lg md:text-xl lg:text-xl max-w-xl mx-auto md:mx-0 hover-white">
            An <span className="font-bold">aspiring software developer</span> in
            the early stages of my journey, focused on learning, building
            fundamentals, and growing through experience.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768579733/112312_dcvgxn.png"
            alt=""
            className="
              w-3/4 max-w-150 md:w-full md:max-w-175 lg:max-w-200 xl:max-w-225
              h-auto
            "
          />
        </div>
      </div>

      {/* SKILLS & TIMELINE */}
      <div className="mt-[30vh] md:mt-[50vh] md:px-[6%] flex flex-col md:flex-row gap-10">
        {/* left */}
        <div className="flex flex-col-reverse md:flex-col md:w-1/3">
          <h1 className="font-base text-3xl hover-white">
            My Path in <br />
            <span className="font-bold">Software Development</span>
          </h1>

          {/* Skills */}
          <div className="mt-10 mb-[50vh] md:mb-0">
            <h1 className="font-bold text-3xl md:hidden">Technical Skills</h1>
            <p className="mt-4">Programming Language</p>
            <div className="flex gap-2 flex-wrap mt-2">
              <p className="Technology">C</p>
              <p className="Technology">TypeScript</p>
              <p className="Technology">JavaScript</p>
              <p className="Technology">Java</p>
              <p className="Technology">C++</p>
            </div>
            <p className="mt-4">Frameworks & Tools</p>
            <div className="flex gap-2 flex-wrap mt-2">
              <p className="Technology">React</p>
              <p className="Technology">Express.js</p>
              <p className="Technology">Google Cloud Platform</p>
              <p className="Technology">Bootstrap</p>
              <p className="Technology">Git</p>
              <p className="Technology">PostgreSQL</p>
              <p className="Technology">HTML</p>
              <p className="Technology">CSS</p>
              <p className="Technology">Figma</p>
            </div>
            <p className="mt-4">Information System Skills</p>
            <div className="flex gap-2 flex-wrap mt-2">
              <p className="Technology">Basic System Analysis & Design</p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="md:w-2/3 max-h-[79vh] overflow-y-scroll hide-scrollbar mb-5 space-y-7">
          {/* Timeline */}
          <ul className="list-none space-y-10">
            {/* First Spark */}
            <li className="my-grid">
              <h2 className="text-xl font-bold">
                First Spark — CS50 by Harvard (June 2022) ✨
              </h2>
              <p className="font-semibold">
                CS50: Introduction to Computer Science (edX / Harvard
                University)
              </p>
              <p className="Technology max-w-27 mb-4 mt-2">C LANGUAGE</p>
              <p className="pl-4">
                My introduction to programming before entering college. Although
                I was’t able to complete the full course due to financial
                constraints, CS50 ignited my passion for problem-solving and
                software development. This experience opened a new path for me
                and helped me build a strong foundation in C programming,
                computational thinking, and logical problem solving.
              </p>
            </li>

            {/* Academic Foundation */}
            <li className="my-grid">
              <h2 className="text-xl font-bold">
                Academic Foundation — BS Information Systems (TUP–Manila)
              </h2>

              <ul className="list-none pl-6 space-y-3 mt-5">
                {/* 1st Year */}
                <li>
                  <span className="font-bold">
                    📘 1st Year (AY 2022–2023) — Fundamentals
                  </span>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <p className="Technology">C</p>
                    <p className="Technology">HTML</p>
                    <p className="Technology">CSS</p>
                  </div>

                  <ul className="list-none pl-4 space-y-1 mb-4 mt-2 font-semibold">
                    <li>CC113 – Introduction to Computing</li>
                    <li>CC131L / CC141L – Computer Programming 1 & 2 </li>
                  </ul>
                  <p className="pl-4">
                    Learned basic computing concepts, algorithms, and
                    problem-solving fundamentals. Built my programming
                    foundation using C, alongside basic HTML and CSS for web
                    structure and styling.
                  </p>
                </li>

                {/* 2nd Year */}
                <li>
                  <span className="font-bold">
                    📗 2nd Year (AY 2023–2024) — Core Programming Skills
                  </span>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <p className="Technology">C++</p>
                    <p className="Technology">MySQL</p>
                  </div>
                  <ul className="list-none pl-4 space-y-1 mb-4 mt-2 font-semibold">
                    <li>CC211L – Data Structures and Algorithms</li>
                    <li>IS251L – Object-Oriented Programming</li>
                    <li>CC201L – Information Management</li>
                  </ul>
                  <p className="pl-4">
                    Studied arrays, stacks, queues, linked lists, and algorithm
                    efficiency. Applied OOP concepts such as encapsulation,
                    inheritance, and polymorphism. Learned MySQL, database
                    design, normalization, and basic SQL queries.
                  </p>
                </li>

                {/* 3rd Year */}
                <li>
                  <span className="font-bold">
                    📙 3rd Year (AY 2024–2025) — Application Development
                  </span>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <p className="Technology">Java</p>
                    <p className="Technology">JavaScript</p>
                  </div>
                  <ul className="list-none pl-4 space-y-1 mb-4 mt-2 font-semibold">
                    <li>CC311L – Web Development</li>
                  </ul>
                  <p className="pl-4">
                    Developed web applications using Java, JavaScript, and
                    modern web concepts. Focus: Turning logic into real-world
                    applications and understanding full web workflows.
                  </p>
                </li>

                {/* 4th Year */}
                <li>
                  <span className="font-bold">
                    📕 4th Year (AY 2025–2026) — Capstone Project
                  </span>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <p className="Technology">PostgreSQL</p>
                    <p className="Technology">Supabase</p>
                    <p className="Technology">React</p>
                    <p className="Technology">Tailwind</p>
                    <p className="Technology">Node.js</p>
                    <p className="Technology">Express.js</p>
                    <p className="Technology">Google Cloud Platform</p>
                  </div>
                  <ul className="list-none pl-4 space-y-1 mb-4 mt-2 font-semibold">
                    <li>
                      Capstone: TravelEase: A Portal for Travel Planning and
                      Tourism Promotion in Tagaytay
                    </li>
                  </ul>
                  <p className="pl-4">
                    Web-based, featuring collaborative itineraries, interactive
                    maps, business listings, and user-generated reviews to
                    enhance tourist decision-making and promote local
                    destinations.
                  </p>
                  <p className="pl-4 mt-2">
                    <span className="font-semibold">Contribution:</span> Project
                    Manager & Core Developer; system planning, database and
                    workflow design, core feature implementation, testing, and
                    project defense.
                  </p>
                  <p className="pl-4 mt-2">
                    <span className="font-semibold">Key Tools:</span> React
                    Leaflet, OpenStreetMap, Nominatim API, Maps JavaScript API,
                    Geocoding API, Directions API, Places API, Supabase Storage,
                    Vercel, Railway
                  </p>
                </li>
              </ul>
            </li>

            {/* Bootcamp Experience */}
            <li className="my-grid">
              <h2 className="text-xl font-bold">
                Bootcamp Experience — BASE404 Web Development
              </h2>
              <ul className="list-none pl-6 space-y-3 mt-2">
                <li>
                  BASE404 Full-Stack Development Bootcamp. Joined BASE404 and
                  focused on their Full-Stack Development Course. Although the
                  platform was eventually shut down, this experience introduced
                  me to React and strengthened my understanding of modern
                  frontend development. I also gained exposure to full-stack
                  concepts involving HTML, CSS, JavaScript, and Express.
                </li>
                <li>
                  This helped bridge the gap between academic learning and
                  industry practices.
                </li>
              </ul>
            </li>

            {/* Competitive & Team Experience */}
            <li className="my-grid">
              <h2 className="text-xl font-bold">
                Competitive & Team Experience — Technolympics 2024
              </h2>
              <ul className="list-none pl-6 space-y-3 mt-2">
                <li>🏆 Technolympics 2024 Champion — TUP Tech Guild</li>
                <li>
                  Participated in Technolympics 2024 as a 2nd-year student with
                  friends and competed against senior teams. The competition
                  involved multiple stations covering: Programming, Networking,
                  UI/UX Designing, Ideathon & problem-solving challenges
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
