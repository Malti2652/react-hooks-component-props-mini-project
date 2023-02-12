import React from "react";
import logo from "../assets/logo.svg";

function About({ image, about }) {
  const src = image || "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={src} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
