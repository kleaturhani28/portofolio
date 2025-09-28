import React from 'react';
import './about.scss';
import AboutImg from '../../assets/photo-2.jpg';
import CV from '../../assets/pdf/CV_KLEA_TURHANI.pdf';
import Info from './Info';

const About = () => {
  return (
   <section className="about section" id="about">
    <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>

        <div className="about_container container grid">
            <img src={AboutImg} alt="" className="about_img" />

            <div className="about-data">
                <Info/>

                <p className="about_description">
               I’m a passionate Software Developer with a background in Computer and Automation Engineering. 
               I enjoy turning complex challenges into clean, scalable, and user-friendly solutions. 
               With experience in desktop, web, and automation systems, and continuous learning in AI, 
               cybersecurity, and modern software practices, I am driven to grow and contribute to innovative 
               projects in dynamic environments.

               For me, software development is not just about writing code—it’s about solving problems, 
               optimizing processes, and creating real value. My goal is to keep learning 
               and evolving as a professional while contributing to impactful projects that connect technology with people.
                </p>

                <a download="" href={CV} className="button button--flex about_button">
                    Download CV <i class='bx bx-download button_icon'></i>
                </a>
            </div>
        </div>
   </section>
  )
}

export default About;
