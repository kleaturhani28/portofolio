import React from 'react';
import './home.scss';

const Social = () => {
  return (
    <div className="home_social"> 
        <a href="https://www.linkedin.com/in/klea-turhani/" 
        className="home_social-icon"
        target="_blank" 
        rel="noopener noreferrer"
        >
            <i class="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://github.com/kleaturhani28" 
        className="home_social-icon" 
        target="_blank" 
        rel="noopener noreferrer"
        >
            <i class="uil uil-github-alt"></i>
        </a>
        <a href="https://www.instagram.com/" 
        className="home_social-icon" 
        target="_blank" 
        rel="noopener noreferrer"
        >
           <i class="uil uil-instagram"></i>
        </a>

    </div>
  )
}

export default Social;
