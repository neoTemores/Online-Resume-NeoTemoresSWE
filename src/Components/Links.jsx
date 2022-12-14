import React from "react";
import pdf from "../Assets/Neo-Temores-SWE-Resume.pdf";
import linkedIn from "../Assets/logos/Linkedin-logo-on-transparent-Background-PNG-.png";
import gitHub from "../Assets/logos/github-48.png";
import openResume from "../Assets/logos/resume-open.png";
import downloadResume from "../Assets/logos/resume-download.png";
import emailIcon from "../Assets/logos/email-icon.png";

const Links = ({ innerWidth }) => {
  return (
    <div className="linksContainer">

      <div className="linksWithTextDiv">
        <a
          href="https://www.linkedin.com/in/neo-temores/"
          rel="noreferrer"
          target="_blank">
          <img src={linkedIn} height="50" alt="linkedIn" />
        </a>
        <a className="linksAnchorTag"
          href="https://www.linkedin.com/in/neo-temores/"
          target="_blank"
          rel="noreferrer">
          LinkedIn
        </a>
      </div>

      <div className="linksWithTextDiv">
        <a href="https://github.com/neoTemores" rel="noreferrer" target="_blank">
          <img className="skillLogoBackgroundCircle" src={gitHub} height="50" alt="github" />
        </a>
        <a className="linksAnchorTag"
          href="https://github.com/neoTemores"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
      </div>

      <div className="linksWithTextDiv">
        <a href="mailto:TemoresNeo@gmail.com">
          <img src={emailIcon} height="50" alt="email" />
        </a>
        <a className="linksAnchorTag" href="mailto:TemoresNeo@gmail.com">
          Email
        </a>
      </div>


      <div className="linksWithTextDiv">
        <a href={pdf} target="_blank" rel="noreferrer">
          <img src={openResume} height="50" alt="open resume" />
        </a>
        <a className="linksAnchorTag"
          href={pdf}
          target="_blank"
          rel="noreferrer">
          View resume
        </a>
      </div>

      <div className="linksWithTextDiv">
        <a href={pdf} download>
          <img src={downloadResume} height="50" alt="download resume" />
        </a>
        <a className="linksAnchorTag" href={pdf} download>
          {innerWidth > 600 ? "Download resume" : "Download"}
        </a>
      </div>
    </div>
  );
};

export default Links;
