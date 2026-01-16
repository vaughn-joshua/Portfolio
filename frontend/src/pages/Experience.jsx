import { useEffect } from "react";
import NavBar from "../components/NavBar";

function Experience() {
  useEffect(() => {
    const backgroundColor = document.getElementById("page-wrap");

    if (backgroundColor) {
      backgroundColor.className = "";

      backgroundColor.classList.add("page-wrap");
      backgroundColor.classList.add("Experience");
    }

    console.log(backgroundColor);
  }, []);

  return (
    <>
      <NavBar />

      <h1>Experience</h1>
      <p>Hello World!</p>
    </>
  );
}

export default Experience;
