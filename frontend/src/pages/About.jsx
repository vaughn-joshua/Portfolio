import { useEffect } from "react";

function About() {
  useEffect(() => {
    const backgroundColor = document.getElementById("page-wrap");
    backgroundColor?.classList.add("About");

    console.log(backgroundColor);
  }, []);

  return (
    <>
      <h1>About</h1>
      <p>Hello World!</p>
    </>
  );
}

export default About;
