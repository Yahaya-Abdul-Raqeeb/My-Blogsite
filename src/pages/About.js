import React from "react";
import withLayout from "./withLayout";
import { useContext } from "react";
import { AboutContext } from "../context/AboutContext";

function About() {
  const { about } = useContext(AboutContext);

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px 0" }}>
      <h2>About Me</h2>

      <div style={{ marginTop: "10px" }}>
        <h3>Name</h3>
        <p>{about.Name}</p>
      </div>

      <div style={{ marginTop: "10px" }}>
        <h3>Bio</h3>
        <p>{about.Bio}</p>
      </div>
      <div style={{ marginTop: "10px" }}>
        <h3>Hobbies</h3>
        {about.Hobbies.map((hobby) => (
          <p
            key={hobby}
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            {hobby}
          </p>
        ))}
      </div>
    </div>
  );
}

export default withLayout(About);
