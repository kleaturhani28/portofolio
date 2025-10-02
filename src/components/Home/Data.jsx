import React from 'react';
import './home.scss';

export const getAge = (dobStr) => {
  // dobStr in formato "YYYY-MM-DD", es. "2000-10-28"
  const [y, m, d] = dobStr.split('-').map(Number);
  const dob = new Date(y, m - 1, d); // mese 0-based
  const now = new Date();

  let age = now.getFullYear() - dob.getFullYear();
  const hadBirthdayThisYear =
    now.getMonth() > dob.getMonth() ||
    (now.getMonth() === dob.getMonth() && now.getDate() >= dob.getDate());

  if (!hadBirthdayThisYear) age--;
  return age;
};

const Data = () => {
  const age = getAge('2000-10-28');

  return (
    <div className="home_data">
      <h1 className="home_title">
        Klea Turhani
      </h1>
      <h3 className="home_subtitle">
        Hello.
      </h3>
      <p className="home_description">
        I'm a <strong>{age}</strong>-year-old a software developer passionate about creating smart and reliable solutions.
        I enjoy working on web, mobile, and automation projects, and I'm always eager
        to learn new technologies and take on fresh challenges.
        Welcome to my portfolio — thanks for visiting!
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello <i class="bx bx-happy home_data-icon"></i>
      </a>
    </div>
  );
};

export default Data;
