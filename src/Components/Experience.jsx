import React from "react";

const Experience = () => {
  const createWorkExp = (title, company, startDate, endDate, description) => {
    return (
      <div className="educationDiv">
        <ul className="experienceUL">
          <li>
            <h3 className="edProgram">{title}</h3>
          </li>
          <li>
            <h4 className="schoolName">{company}</h4>
          </li>
          <li>
            <h5 className="gradDate">{startDate} - {endDate}</h5>{" "}
          </li>
        </ul>

        <p className="educationDescription">{description}</p>
      </div>
    );
  };

  return (

    <div className="educationMainContainer">
      {createWorkExp(
        "Cavalry Scout, Sergeant",
        "U.S. Army, Active Duty",
        "Apr 2019",
        "Aug 2022",
        "Supervised, trained, and mentored up to 15 Soldiers at any given time.Obtained additional responsibility tracking and maintaining all records and administrative data for 90 Soldiers.Worked closely on a daily basis with higher ranking officials to ensure tasks and objectives were completed"
      )}
      <div className="divider"> </div>

      {createWorkExp(
        "Service Advisor",
        "Berts Mega Mall service dept.",
        "June 2015",
        "Apr 2019",
        "Responsibilities included greeting customers, listening to requests, scheduling appointments, estimating costs, verifying insurance, conducting inspections, and inspecting vehicles prior and post repairs. Achieved top grossing advisor within first year of employment, totaling over $1.2 Million in sales. Maintained top advisor position throughout entire length of employment and received outstanding customer service ratings. "
      )}
    </div>
  );
};

export default Experience;
