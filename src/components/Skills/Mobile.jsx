import React from 'react';
import './skills.scss';

const Mobile = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Mobile Developer</h3>

      <div className="skills_box">
        <div className="skills_group">

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Kotlin</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Flutter</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Android Studio</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Mobile;