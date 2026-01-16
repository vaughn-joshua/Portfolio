import { useEffect } from "react";

function Project() {
  useEffect(() => {
    const backgroundColor = document.getElementById("page-wrap");
    backgroundColor?.classList.add("Project");

    console.log(backgroundColor);
  }, []);

  return (
    <>
      <h1>Work</h1>
      <p>Hello World!</p>
    </>
  );
}

export default Project;
