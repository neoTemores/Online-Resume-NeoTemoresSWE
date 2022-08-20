import React, { useState, useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Education = () => {
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);
  const createEducationDiv = (
    schoolName,
    program,
    mobileProgram,
    gradDate,
    description
  ) => {
    return (
      <div className="educationDiv">
        <ul className="educationUL">
          <li>
            <h3 className="edProgram">
              {windowSize > 600 ? program : mobileProgram}
            </h3>
          </li>
          <li>
            <h4 className="schoolName">{schoolName}</h4>
          </li>
          <li>
            <h5 className="gradDate">Graduation date: {gradDate}</h5>
          </li>
        </ul>

        <p className="educationDescription">
          <GoPrimitiveDot />
          {description}
        </p>
      </div>
    );
  };
  return (
    <div className="educationMainContainer">
      {createEducationDiv(
        "Galvanize Operation Level-Up",
        "Full stack software engineering immersive",
        "Full stack software engineering immersive",
        "Aug 2022",
        "18-week software engineering immersive program with over 1000+ hours of coding. Full-Stack development with JavaScript, React, HTML, CSS, Express, Node and PostgreSQL in an AGILE environment "
      )}
      {createEducationDiv(
        "DeVry University",
        "B.S. Computer Information Systems, Software Development",
        "B.S. CIS, Software Development",
        "Expected June 2025",
        "Completed 30 credits towards a BS in Computer Information Systems, concentration in Software Programming  "
      )}
    </div>
  );
};

export default Education;
