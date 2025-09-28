import React from 'react';
import './skills.scss';

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>
      <div className="skills_box">
        
        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Delphi</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">PHP (Laravel)</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">MySQL / SQLite</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">SQL Server</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Firebird</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Redis</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


export default Backend;
