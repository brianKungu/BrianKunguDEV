import React, { useState } from "react";

export default function Tabs({ date, school, course }) {
  const [toggleTab, setToggleTab] = useState("Education");
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
        <div className="timeline">
          <div className="timeline-item">
            <span className="date">2021-2022</span>
            <h4>
              Frontend developer - <span>Hexlen</span>
            </h4>
            <p>kldfldflksdflkdlfks</p>
          </div>
          <div className="timeline-item">
            <span className="date">2021-2022</span>
            <h4>
              Frontend developer - <span>Hexlen</span>
            </h4>
            <p>lkdflklkflkdfgld</p>
          </div>
          <div className="timeline-item">
            <span className="date">2021-2022</span>
            <h4>
              Frontend developer - <span>Hexlen</span>
            </h4>
            <p>flskdmflkdmflk</p>
          </div>
        </div>
      </div>
      {/* Experience section */}
    </>
  );
}
