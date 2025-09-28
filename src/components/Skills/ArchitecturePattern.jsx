import React from 'react';
import './skills.scss';


const Architecture = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Software Architecture</h3>

      <div className="skills_box">
        <div className="skills_group">

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Clean Architecture</h3>
              <span className="skills_level">Applied</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">SOLID Principles</h3>
              <span className="skills_level">Applied</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Microservices</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

        </div>

        <div className="skills_group">

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">MVC Pattern</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">MVP Pattern</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">MVVM Pattern</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Singleton / Factory</h3>
              <span className="skills_level">Applied</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Observer / Repository</h3>
              <span className="skills_level">Applied</span>
            </div>
          </div>

          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Dependency Injection</h3>
              <span className="skills_level">Applied</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Architecture;