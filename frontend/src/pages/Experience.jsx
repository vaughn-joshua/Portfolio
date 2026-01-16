import { useEffect } from "react";

function Experience() {
  useEffect(() => {
    const backgroundColor = document.getElementById("page-wrap");
    backgroundColor?.classList.add("Experience");

    console.log(backgroundColor);
  }, []);

  return (
    <>
      <h1>Experience</h1>
      <p>Hello World!</p>
    </>
  );
}

export default Experience;
