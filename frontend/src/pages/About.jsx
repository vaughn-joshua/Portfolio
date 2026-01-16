import { useEffect } from "react";
import NavBar from "../components/NavBar";

function About() {
  useEffect(() => {
    const backgroundColor = document.getElementById("page-wrap");

    if (backgroundColor) {
      backgroundColor.className = "";

      backgroundColor.classList.add("page-wrap");
      backgroundColor.classList.add("About");
    }

    console.log(backgroundColor);
  }, []);

  return (
    <>
      <NavBar />

      <h1>About</h1>
      <p>Hello World!</p>
    </>
  );
}

export default About;
