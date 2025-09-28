import React from 'react';
import Works from './Works';
import './portfolio.scss';


const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">My Portfolio</h2>
      <span className="section_subtitle">Most Recent work</span>

      <Works/>
    </section> 
  );
};

export default Portfolio;
