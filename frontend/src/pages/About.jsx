import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function About() {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const backgroundColor = document.getElementById("page-wrap");
    if (backgroundColor) {
      backgroundColor.className = "";
      backgroundColor.classList.add("page-wrap");
      backgroundColor.classList.add("About");
    }
  }, []);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <>
      <NavBar />

      <div className="md:px-[6%] flex flex-col gap-10 mt-10 mb-15">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl leading-tight hover:text-gray-700">
          About Me
        </h1>

        {/* Short Description - Half width */}
        <p className="md:w-1/2 text-gray-700 leading-relaxed">
          I’m a <strong>passionate</strong> individual who enjoys{" "}
          <strong>learning</strong>, <strong>creating</strong>, and
          <strong> serving</strong>. Beyond programming and design, much of who
          I am comes from my dedication to serving my parish community at{" "}
          <strong>Sta. Clara de Montefalco Parish</strong>.
        </p>

        {/* Paragraph with image */}
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <img
            src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768594725/600405382_855902826807427_4333230745337772026_n_phdfvv.jpg"
            alt="YCLSS Seminar"
            className="w-full md:w-1/4 h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() =>
              openModal(
                "https://res.cloudinary.com/dezl3r1u5/image/upload/v1768594725/600405382_855902826807427_4333230745337772026_n_phdfvv.jpg"
              )
            }
          />
          <p className="text-gray-700 leading-relaxed">
            Since 2014, I have been actively involved in the{" "}
            <strong>Youth Catholic Life in the Spirit Seminar (YCLSS)</strong>{" "}
            at Sta. Clara. I was part of <strong>Batch 77</strong>, and that
            experience sparked my journey in serving the Lord. Every summer, I
            help facilitate the seminar for new youth batches, guiding them in
            their faith and personal growth.
          </p>
        </div>

        {/* Another Paragraph with image */}
        <div className="flex flex-col md:flex-row-reverse gap-4 items-start">
          <img
            src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768594725/480572796_636735648724147_226596149488998025_n_yunssn.jpg"
            alt="Parish Activities"
            className="w-full md:w-1/4 h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() =>
              openModal(
                "https://res.cloudinary.com/dezl3r1u5/image/upload/v1768594725/480572796_636735648724147_226596149488998025_n_yunssn.jpg"
              )
            }
          />
          <p className="text-gray-700 leading-relaxed">
            Outside the seminar, I actively participate in parish activities
            such as <strong>choir service</strong> every Sunday,{" "}
            <strong>worship day</strong> every Thursday, and various youth
            programs including <strong>sportsfests</strong>,{" "}
            <strong>outings</strong>, <strong>team-building events</strong>, and{" "}
            <strong>outreach programs</strong>. These experiences have shaped me
            into a <strong>leader</strong> who values <strong>community</strong>
            , <strong>teamwork</strong>, and <strong>meaningful service</strong>
            .
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/20 p-4"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Zoomed"
            className="max-w-full max-h-full rounded-lg shadow-xl cursor-pointer"
          />
        </div>
      )}
    </>
  );
}

export default About;
