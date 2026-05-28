import React from 'react';
import Works from './Works';
import './portfolio.scss';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">Selected work</span>

      <Works />
    </section>
  );
};

export default Portfolio;