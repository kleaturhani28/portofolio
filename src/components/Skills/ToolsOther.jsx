import React from 'react';
import './skills.scss';


const Tools = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Tools & Other</h3>

      <div className="skills_box">
        <div className="skills_group">

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Git / GitHub</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Docker</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">REST API</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

        </div>

        <div className="skills_group">

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">FireDAC / ADO</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">OOP & Clean Code</h3>
              <span className="skills_level">Applied</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Tools;