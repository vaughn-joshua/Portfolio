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
            <p className="mt-4">
              <strong>Programming Languages</strong>
            </p>
            <div className="flex gap-2 flex-wrap mt-2">
              <p className="Technology">
                <strong>C</strong>
              </p>
              <p className="Technology">
                <strong>TypeScript</strong>
              </p>
              <p className="Technology">
                <strong>JavaScript</strong>
              </p>
              <p className="Technology">
                <strong>Java</strong>
              </p>
              <p className="Technology">
                <strong>C++</strong>
              </p>
            </div>
            <p className="mt-4">
              <strong>Frameworks & Tools</strong>
            </p>
            <div className="flex gap-2 flex-wrap mt-2">
              <p className="Technology">
                <strong>React</strong>
              </p>
              <p className="Technology">
                <strong>Express.js</strong>
              </p>
              <p className="Technology">
                <strong>Google Cloud Platform</strong>
              </p>
              <p className="Technology">
                <strong>Bootstrap</strong>
              </p>
              <p className="Technology">
                <strong>Git</strong>
              </p>
              <p className="Technology">
                <strong>PostgreSQL</strong>
              </p>
              <p className="Technology">
                <strong>HTML</strong>
              </p>
              <p className="Technology">
                <strong>CSS</strong>
              </p>
              <p className="Technology">
                <strong>Figma</strong>
              </p>
            </div>
            <p className="mt-4">
              <strong>Information System Skills</strong>
            </p>
            <div className="flex gap-2 flex-wrap mt-2">
              <p className="Technology">
                <strong>Basic System Analysis & Design</strong>
              </p>
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
                <strong>First Spark — CS50 by Harvard</strong> (June 2022) ✨
              </h2>
              <p className="font-semibold">
                <strong>CS50: Introduction to Computer Science</strong> (edX /
                Harvard University)
              </p>
              <p className="Technology max-w-27 mb-4 mt-2">
                <strong>C LANGUAGE</strong>
              </p>
              <p className="pl-4">
                My introduction to programming before entering college. Although
                I wasn't able to complete the full course due to{" "}
                <strong>financial constraints</strong>, CS50{" "}
                <strong>ignited my passion for problem-solving</strong> and
                software development. This experience opened a new path for me
                and helped me build a strong foundation in{" "}
                <strong>
                  C programming, computational thinking, and logical problem
                  solving
                </strong>
                .
              </p>
            </li>

            {/* Academic Foundation */}
            <li className="my-grid">
              <h2 className="text-xl font-bold">
                <strong>
                  Academic Foundation — BS Information Systems (TUP–Manila)
                </strong>
              </h2>

              <ul className="list-none pl-6 space-y-3 mt-5">
                {/* 1st Year */}
                <li>
                  <span className="font-bold">
                    📘 1st Year (AY 2022–2023) — <strong>Fundamentals</strong>
                  </span>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <p className="Technology">
                      <strong>C</strong>
                    </p>
                    <p className="Technology">
                      <strong>HTML</strong>
                    </p>
                    <p className="Technology">
                      <strong>CSS</strong>
                    </p>
                  </div>
                  <ul className="list-none pl-4 space-y-1 mb-4 mt-2 font-semibold">
                    <li>
                      <strong>CC113 – Introduction to Computing</strong>
                    </li>
                    <li>
                      <strong>
                        CC131L / CC141L – Computer Programming 1 & 2
                      </strong>
                    </li>
                  </ul>
                  <p className="pl-4">
                    Learned{" "}
                    <strong>basic computing concepts, algorithms</strong>, and{" "}
                    <strong>problem-solving fundamentals</strong>. Built my
                    programming foundation using <strong>C</strong>, alongside
                    basic <strong>HTML</strong> and <strong>CSS</strong> for web
                    structure and styling.
                  </p>
                </li>

                {/* 2nd Year */}
                <li>
                  <span className="font-bold">
                    📗 2nd Year (AY 2023–2024) —{" "}
                    <strong>Core Programming Skills</strong>
                  </span>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <p className="Technology">
                      <strong>C++</strong>
                    </p>
                    <p className="Technology">
                      <strong>MySQL</strong>
                    </p>
                  </div>
                  <ul className="list-none pl-4 space-y-1 mb-4 mt-2 font-semibold">
                    <li>
                      <strong>CC211L – Data Structures and Algorithms</strong>
                    </li>
                    <li>
                      <strong>IS251L – Object-Oriented Programming</strong>
                    </li>
                    <li>
                      <strong>CC201L – Information Management</strong>
                    </li>
                  </ul>
                  <p className="pl-4">
                    Studied{" "}
                    <strong>arrays, stacks, queues, linked lists</strong>, and{" "}
                    <strong>algorithm efficiency</strong>. Applied{" "}
                    <strong>OOP concepts</strong> such as encapsulation,
                    inheritance, and polymorphism. Learned{" "}
                    <strong>MySQL, database design, normalization</strong>, and
                    basic SQL queries.
                  </p>
                </li>

                {/* 3rd Year */}
                <li>
                  <span className="font-bold">
                    📙 3rd Year (AY 2024–2025) —{" "}
                    <strong>Application Development</strong>
                  </span>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <p className="Technology">
                      <strong>Java</strong>
                    </p>
                    <p className="Technology">
                      <strong>JavaScript</strong>
                    </p>
                  </div>
                  <ul className="list-none pl-4 space-y-1 mb-4 mt-2 font-semibold">
                    <li>
                      <strong>CC311L – Web Development</strong>
                    </li>
                  </ul>
                  <p className="pl-4">
                    Developed <strong>web applications</strong> using{" "}
                    <strong>Java, JavaScript</strong>, and modern web concepts.
                    Focus: Turning logic into real-world applications and
                    understanding full web workflows.
                  </p>
                </li>

                {/* 4th Year */}
                <li>
                  <span className="font-bold">
                    📕 4th Year (AY 2025–2026) —{" "}
                    <strong>Capstone Project</strong>
                  </span>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <p className="Technology">
                      <strong>PostgreSQL</strong>
                    </p>
                    <p className="Technology">
                      <strong>Supabase</strong>
                    </p>
                    <p className="Technology">
                      <strong>React</strong>
                    </p>
                    <p className="Technology">
                      <strong>Tailwind</strong>
                    </p>
                    <p className="Technology">
                      <strong>Node.js</strong>
                    </p>
                    <p className="Technology">
                      <strong>Express.js</strong>
                    </p>
                    <p className="Technology">
                      <strong>Google Cloud Platform</strong>
                    </p>
                  </div>
                  <ul className="list-none pl-4 space-y-1 mb-4 mt-2 font-semibold">
                    <li>
                      <strong>Capstone:</strong> TravelEase: A Portal for Travel
                      Planning and Tourism Promotion in Tagaytay
                    </li>
                  </ul>
                  <p className="pl-4">
                    Web-based, featuring{" "}
                    <strong>
                      collaborative itineraries, interactive maps, business
                      listings, and user-generated reviews
                    </strong>{" "}
                    to enhance tourist decision-making and promote local
                    destinations.
                  </p>
                  <p className="pl-4 mt-2">
                    <span className="font-semibold">Contribution:</span> Project
                    Manager & Core Developer;{" "}
                    <strong>
                      system planning, database and workflow design, core
                      feature implementation, testing
                    </strong>
                    , and project defense.
                  </p>
                  <p className="pl-4 mt-2">
                    <span className="font-semibold">Key Tools:</span>{" "}
                    <strong>
                      React Leaflet, OpenStreetMap, Nominatim API, Maps
                      JavaScript API, Geocoding API, Directions API, Places API,
                      Supabase Storage, Vercel, Railway
                    </strong>
                  </p>
                </li>
              </ul>
            </li>

            {/* Bootcamp Experience */}
            <li className="my-grid">
              <h2 className="text-xl font-bold">
                <strong>Bootcamp Experience — BASE404 Web Development</strong>
              </h2>
              <ul className="list-none pl-6 space-y-3 mt-2">
                <li>
                  <strong>BASE404 Full-Stack Development Bootcamp.</strong>{" "}
                  Joined BASE404 and focused on their Full-Stack Development
                  Course. Although the platform was eventually shut down, this
                  experience introduced me to <strong>React</strong> and
                  strengthened my understanding of{" "}
                  <strong>modern frontend development</strong>. I also gained
                  exposure to <strong>full-stack concepts</strong> involving{" "}
                  <strong>HTML, CSS, JavaScript, and Express</strong>.
                </li>
                <li>
                  This helped bridge the gap between{" "}
                  <strong>academic learning</strong> and{" "}
                  <strong>industry practices</strong>.
                </li>
              </ul>
            </li>

            {/* Competitive & Team Experience */}
            <li className="my-grid">
              <h2 className="text-xl font-bold">
                <strong>
                  Competitive & Team Experience — Technolympics 2024
                </strong>
              </h2>
              <ul className="list-none pl-6 space-y-3 mt-2">
                <li>
                  🏆{" "}
                  <strong>Technolympics 2024 Champion — TUP Tech Guild</strong>
                </li>
                <li>
                  Participated in Technolympics 2024 as a 2nd-year student with
                  friends and competed against senior teams. The competition
                  involved multiple stations covering:{" "}
                  <strong>
                    Programming, Networking, UI/UX Designing, Ideathon
                  </strong>{" "}
                  & problem-solving challenges.
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
