import React from "react";

const Experience = () => {
  const createWorkExp = (title, company, startDate, endDate) => {
    return (
      <div>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <h5>{startDate}</h5>
        <h5>{endDate}</h5>
      </div>
    );
  };
  return (
    <div className="mainExperienceContainer">
      {createWorkExp(
        "Cavalry Scout, Sergeant",
        "U.S. Army",
        "Apr 2019",
        "Aug 2022"
      )}
      {createWorkExp(
        "Service Advisor",
        "Berts Mega Mall service dept.",
        "June 2015",
        "Apr 2019"
      )}
    </div>
  );
};

export default Experience;
