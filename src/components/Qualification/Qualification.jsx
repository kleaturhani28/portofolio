import React, { useState } from 'react';
import './qualification.scss';

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitle">Education & experience</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <button
            type="button"
            className={
              toggleState === 1
                ? 'qualification_button education_button qualification_active button--flex'
                : 'qualification_button education_button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </button>

          <button
            type="button"
            className={
              toggleState === 2
                ? 'qualification_button experience_button qualification_active button--flex'
                : 'qualification_button experience_button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </button>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? 'qualification_content experience_content qualification_content-active'
                : 'qualification_content experience_content'
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Bachelor in Computer & Automation Engineering
                </h3>
                <span className="qualification_subtitle">
                  Polytechnic University of Marche – Ancona, Italy
                </span>
              </div>

              <div>
                <span className="qualification_rounder"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification_content qualification_content-active'
                : 'qualification_content'
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Developer</h3>
                <span className="qualification_subtitle">
                  Graphite S.R.L – Remote / Italy
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  March 2024 – Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Technical Volunteer Operator PEI
                </h3>
                <span className="qualification_subtitle">
                  Central Election Commission, KQZ – Tirana, Albania
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Election periods: 2021, 2023, 2025 – Ongoing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;