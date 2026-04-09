import React from 'react';
import './home.scss';

// export const getAge = (dobStr) => {
//   // dobStr in formato "YYYY-MM-DD", es. "2000-10-28"
//   const [y, m, d] = dobStr.split('-').map(Number);
//   const dob = new Date(y, m - 1, d); // mese 0-based
//   const now = new Date();

//   let age = now.getFullYear() - dob.getFullYear();
//   const hadBirthdayThisYear =
//     now.getMonth() > dob.getMonth() ||
//     (now.getMonth() === dob.getMonth() && now.getDate() >= dob.getDate());

//   if (!hadBirthdayThisYear) age--;
//   return age;
// };

const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">
        Klea Turhani
      </h1>
      <h3 className="home_subtitle">
        Software Developer
      </h3>
      <p className="home_description">
        Turning ideas into practical and reliable digital solutions.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello <i className="bx bx-happy home_data-icon"></i>
      </a>
    </div>
  );
};

export default Data;
