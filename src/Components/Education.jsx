import React from "react";

const Education = () => {
  const createEducationDiv = (schoolName, program, gradDate, description) => {
    return (
      <div className="educationDiv">
        <ul className="educationUL">
          <li>
            <h3 className="edProgram">{program}</h3>
          </li>
          <li>
            <h4 className="schoolName">{schoolName}</h4>
          </li>
          <li>
            <h5 className="gradDate">Graduation date: {gradDate}</h5>{" "}
          </li>
        </ul>

        <p className="educationDescription">{description}</p>
      </div>
    );
  };
  return (
    <div className="educationMainContainer">
      {createEducationDiv(
        "Galvanize Operation Level-Up",
        "Full stack software engineering immersive",
        "Aug 2022",
        "18-week software engineering immersive program with over 1000+ hours of coding. Full-Stack development with JavaScript, React, HTML, CSS, Express, Node and PostgreSQL in an AGILE environment "
      )}
      <div className="divider"> </div>
      {createEducationDiv(
        "DeVry University",
        "B.S. Computer Information Sys, Software ",
        "Expected June 2025",
        "Completed 30 credits towards a BS in Computer Information Systems, with a concentration in Software Development  "
      )}
    </div>
  );
};

export default Education;
