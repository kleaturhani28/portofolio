import React, {useState} from 'react';
import './qualification.scss';

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          {/* --- Education --- */}
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Bachelor in Computer & Automation Engineering
                </h3>
                <span className="qualification_subtitle">
                  Polytechnic University of Marche – Ancona, IT
                </span>
                {/* no date here as requested */}
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          {/* --- Experience --- */}
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Developer</h3>
                <span className="qualification_subtitle">
                  Graphite Albania – Tirana
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
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Technical Operator (PEI) – Volunteering
                </h3>
                <span className="qualification_subtitle">
                  Central Election Commission (KQZ) – Tirana
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  May 2023
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Technical Operator (PEI) – Volunteering
                </h3>
                <span className="qualification_subtitle">
                  Central Election Commission (KQZ) – Tirana
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  April 2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
