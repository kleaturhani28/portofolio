import React from 'react';
import './about.scss';

export const getYearsFromDate = (startDateStr) => {
  const [y, m, d] = startDateStr.split('-').map(Number);
  const startDate = new Date(y, m - 1, d);
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  const hasReachedAnniversary =
    now.getMonth() > startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() && now.getDate() >= startDate.getDate());

  if (!hasReachedAnniversary) years--;
  return years;
};

const Info = () => {
  const workYears = getYearsFromDate('2024-03-11');

  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">
          {workYears < 1 ? '< 1 year' : `${workYears}+ years`}
        </span>
      </div>

      <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Projects</h3>
        <span className="about_subtitle">10+ completed</span>
      </div>

      <div className="about_box">
        <i className="bx bx-support about_icon"></i>
        <h3 className="about_title">Availability</h3>
        <span className="about_subtitle">Remote / Hybrid</span>
      </div>
    </div>
  );
};

export default Info;