import React from "react";

const Education = () => {
  const createEducationDiv = (schoolName, program, gradDate, description) => {
    return (
      <>
        <div className="educationProgramSchool">
          <h3>{program}</h3> <h4>{schoolName}</h4>
          <h6 className="gradDate">Graduation date: {gradDate}</h6>
        </div>
        <p>{description}</p>
      </>
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
      {createEducationDiv(
        "DeVry University",
        "B.S. Computer Information Systems, Software Development",
        "Expected June 2025",
        "Completed 30 credits towards a BS in Computer Information Systems, concentration in Software Programming  "
      )}
    </div>
  );
};

export default Education;
