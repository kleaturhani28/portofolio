import React from 'react';
import './footer.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer_container container">
                <h2 className="footer_title">Building smart & reliable software</h2>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer_link">Qualifications</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a
                        href="https://github.com/kleaturhani28"
                        className="footer_social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                    >
                        <i className="bx bxl-github"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/klea-turhani/"
                        className="footer_social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className="footer_copy">
                    &#169; {currentYear} Klea Turhani. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;