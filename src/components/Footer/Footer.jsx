import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Jora</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#qualification" className="footer_link">Qualification</a>
                </li>
            </ul>

     <div className="footer_social">
        <a href="https://www.instagram.com/" 
                className="footer_social-link" 
                target="_blank" 
                rel="noopener noreferrer"
                >
           <i class="bx bxl-instagram"></i>
        </a>

        <a href="https://github.com/kleaturhani28" 
                className="footer_social-link"
                target="_blank" 
                rel="noopener noreferrer" 
                >
            <i class="bx bxl-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/klea-turhani/" 
                className="footer_social-link" 
                target="_blank" 
                rel="noopener noreferrer"
                >
            <i class="bx bxl-linkedin"></i>
        </a>
            </div>

            <span className="footer_copy">
                &#169;Klea Turhani. All rights reserved.
                </span>
     </div>
    </footer>
  );
};

export default Footer;
