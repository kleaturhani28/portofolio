import React from 'react';
import './about.scss';
import AboutImg from '../../assets/womaninatech workspace.png';
import CV from '../../assets/pdf/klea_turhani_cv_eng.pdf';
import Info from './Info';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>

            <div className="about_container container grid">
                <img
                    src={AboutImg}
                    alt="Klea Turhani illustration"
                    className="about_img"
                />

                <div className="about-data">
                    <Info />

                    <p className="about_description">
                        I’m a Software Developer with a background in Computer and Automation Engineering.
                        I enjoy working on software, web, and automation projects, with a focus on building
                        practical, reliable, and well-structured solutions.
                    </p>

                    <p className="about_description">
                        I’m always motivated to learn new technologies, improve my skills, and grow through
                        different experiences. For me, software development is not only about writing code,
                        but also about solving problems, improving processes, and creating something useful.
                    </p>

                    <a download href={CV} className="button button--flex about_button">
                        Download CV <i className="bx bx-download button_icon"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;