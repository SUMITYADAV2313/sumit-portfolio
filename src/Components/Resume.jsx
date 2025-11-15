import React from "react";
import "./Resume.css"; 
import resumeFile from "/resume.pdf"; 

function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <h2 className="fade-in">My Resume</h2>

      <p className="slide-up">
        Here’s my professional resume. You can view it online or download it below.
      </p>

      <div className="resume-buttons fade-in">
        <a
          href={resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-view"
        >
          📄 View Resume
        </a>

        <a href={resumeFile} download className="btn-download">
          ⬇️ Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
