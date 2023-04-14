import React, { useState, useEffect } from "react";
import details from "utils/data";
export default function Tabs({ date, school, course }) {
  const [toggleTab, setToggleTab] = useState("Education");
  const text = " "
  return (
    <>
      <div className="about-tabs">
        <button
          type="button"
          className={toggleTab === "Education" ? "tab-item active" : "tab-item"}
          onClick={() => setToggleTab("Education")}
        >
          Education
        </button>
        <button
          type="button"
          className={
            toggleTab === "Experience" ? "tab-item active" : "tab-item"
          }
          onClick={() => setToggleTab("Experience")}
        >
          Experience
        </button>
      </div>

      {/* Education section */}
      <div
        className={toggleTab === "Education" ? "tab-content" : "hidden"}
        id="education"
      >
        <div className="timeline">
          <div className="timeline-item">
            <span className="date">{date}</span>
            <h4>
              {course} - <span>{school}</span>
            </h4>
          </div>
        </div>
      </div>
      {/* Education section */}

      {/* Experience section */}
      <div
        className={toggleTab === "Experience" ? "tab-content" : "hidden"}
        id="experience"
      >
        {details &&
          details.map((detail) => {
            return detail.professionalExperience.map((experience, index) => (
              <div className="timeline" key={index}>
                <div className="timeline-item">
                  <span className="date">{experience.period}</span>
                  <h4>
                    {experience.role} - <span>{experience.company}</span>
                  </h4>
                  <p className="text-black">{experience.achievements}</p>
                </div>
              </div>
            ));
          })}
      </div>
      {/* Experience section */}
    </>
  );
}
