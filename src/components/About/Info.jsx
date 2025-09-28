import React from 'react';
import './about.scss';

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
      <i class='bx bx-award about_icon'></i>

        <h3 className="about_title">Experiences</h3>
        <span className="about_subtitle">1 year 7 months</span>
      </div>

      <div className="about_box">
      <i class='bx bx-briefcase-alt about_icon' ></i>

        <h3 className="about_title">Projects</h3>
        <span className="about_subtitle">+10 Completed</span>
      </div>

      <div className="about_box">
      <i class='bx bx-support about_icon'></i>

        <h3 className="about_title">Availability</h3>
        <span className="about_subtitle">Freelance / Remote</span>
      </div>
    </div>
  )
}

export default Info;
