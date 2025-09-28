import React from 'react';
import './home.scss';

const Data = () => {
  return (
    <div className="home_data">
        <h1 className="home_title">
            Klea Turhani           
        </h1>
        <h3 className="home_subtitle">
            Hello.
        </h3>
        <p className="home_description">
         Hi, I'm <strong>Klea</strong>, a software developer passionate about creating smart and reliable solutions. 
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
