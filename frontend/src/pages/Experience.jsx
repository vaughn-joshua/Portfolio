import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Experience() {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const backgroundColor = document.getElementById("page-wrap");
    if (backgroundColor) {
      backgroundColor.className = "";
      backgroundColor.classList.add("page-wrap");
      backgroundColor.classList.add("Experience");
    }
  }, []);

  const openModal = (imgSrc) => setModalImage(imgSrc);
  const closeModal = () => setModalImage(null);

  return (
    <>
      <NavBar />

      <div className="md:px-[6%] flex flex-col gap-10 mt-10 mb-15">
        {/* Education */}
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl leading-tight hover:text-gray-700">
          Education
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold">
          <strong>Bachelor of Science in Information Systems</strong> - 4th Year
          <br />
          <strong>Technological University of the Philippines–Manila</strong>
        </h2>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed md:w-1/2">
          A <strong>curious learner</strong>, driven not only by my studies in{" "}
          <strong>Information Systems</strong> but also by exploring{" "}
          <strong>opportunities beyond the classroom</strong>. I enjoy expanding
          my skills across <strong>development</strong>, <strong>design</strong>
          , and other <strong>creative pursuits</strong>, bringing{" "}
          <strong>dedication</strong> and <strong>enthusiasm</strong> to every
          project I take on.
        </p>

        {/* Highlights */}
        <ul className="list-none pl-0 space-y-3 text-gray-700">
          <li>
            Awarded by the{" "}
            <strong>
              Department of Science and Technology (DOST) JLSS RA 7687
              Scholarship
            </strong>{" "}
            (2024 – Present) <br />
            for <strong>outstanding academic potential</strong> and commitment
            to <strong>science and technology</strong>.
          </li>
          <li>
            <strong>Consistent Dean’s Lister</strong> from First Year, First
            Semester through Fourth Year, maintaining a{" "}
            <strong>GPA of 1.75 and above</strong>, reflecting{" "}
            <strong>dedication</strong> and{" "}
            <strong>consistent academic performance</strong>.
          </li>
          <li>
            <strong>Technolympics 2024 Champion</strong> with{" "}
            <strong>Tech Guild, TUP–Manila</strong>, demonstrating{" "}
            <strong>practical skills</strong>, <strong>teamwork</strong>, and{" "}
            <strong>innovation</strong> in technical competitions.
          </li>
        </ul>

        {/* Experience */}
        <div className="space-y-6">
          {/* CJ Foods */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-full md:w-1/4 h-48 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768592576/viber_image_2023-08-29_11-52-59-729_yvk2sc.png"
                alt="CJ Foods"
                className="w-full h-full object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() =>
                  openModal(
                    "https://res.cloudinary.com/dezl3r1u5/image/upload/v1768592576/viber_image_2023-08-29_11-52-59-729_yvk2sc.png"
                  )
                }
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold">
                <strong>Graphic Artist</strong> –{" "}
                <strong>CJ Foods Group Philippines, BGC</strong> |{" "}
                <strong>August 2023</strong>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As a recognized{" "}
                <strong>Adobe Photoshop Curriculum Graduate</strong>, I have
                been interested in <strong>photo editing</strong>. This helped
                me land a <strong>Graphic Artist role</strong> where I redesign
                and translate <strong>CJ Foods product packaging</strong>.
              </p>
            </div>
          </div>

          {/* Becarman */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-full md:w-1/4 h-48 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768592566/Logo_Landscape_jh8hry.png"
                alt="Becarman"
                className="w-full h-full object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() =>
                  openModal(
                    "https://res.cloudinary.com/dezl3r1u5/image/upload/v1768592566/Logo_Landscape_jh8hry.png"
                  )
                }
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold">
                <strong>
                  Social Media Manager, Graphic Artist, Video Editor
                </strong>{" "}
                – <strong>Becarman (Startup), Malate, Manila</strong>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I also have experience managing{" "}
                <strong>social media accounts</strong>, creating content
                including <strong>content conceptualization</strong>,
                <strong>video editing</strong>, and{" "}
                <strong>social media marketing</strong>.
              </p>
            </div>
          </div>

          {/* Sunbee Co */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-full md:w-1/4 h-48 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768592545/outside_aopsqs.png"
                alt="Sunbee Co"
                className="w-full h-full object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() =>
                  openModal(
                    "https://res.cloudinary.com/dezl3r1u5/image/upload/v1768592545/outside_aopsqs.png"
                  )
                }
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold">
                <strong>Graphic Artist</strong> –{" "}
                <strong>Sunbee Co. (Korea-based)</strong>,{" "}
                <strong>May 2022</strong>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                In my spare time, I take <strong>commission works</strong> from
                architecture students to small startup companies, including{" "}
                <strong>filming</strong>, <strong>editing videos</strong>,{" "}
                <strong>Photoshop projects</strong>, and{" "}
                <strong>business graphics</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <h2 className="text-2xl font-bold mt-8">Certificates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Certificate 1 */}
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() =>
              openModal(
                "https://res.cloudinary.com/dezl3r1u5/image/upload/v1768592869/Techokids-Photoshop_vy7jlp.png"
              )
            }
          >
            <div className="w-24 h-24 shrink-0">
              <img
                src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768592869/Techokids-Photoshop_vy7jlp.png"
                alt="Photoshop Curriculum Graduate (2017)"
                className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
              />
            </div>
            <p className="text-gray-700 font-semibold">
              Photoshop Curriculum Graduate (2017)
            </p>
          </div>

          {/* Certificate 2 */}
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() =>
              openModal(
                "https://res.cloudinary.com/dezl3r1u5/image/upload/v1768592872/Microsoft_au4hla.png"
              )
            }
          >
            <div className="w-24 h-24 shrink-0">
              <img
                src="https://res.cloudinary.com/dezl3r1u5/image/upload/v1768592872/Microsoft_au4hla.png"
                alt="Microsoft Office Specialist (2016) – Microsoft Recognized"
                className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
              />
            </div>
            <p className="text-gray-700 font-semibold">
              Microsoft Office Specialist (2016) – Microsoft Recognized
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
      </div>
    </>
  );
}

export default Experience;
