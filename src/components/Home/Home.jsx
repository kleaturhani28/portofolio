import React from 'react';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import photo from '../../assets/avatar1-homepage.png';
import './home.scss';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />

          <div
            className="home_img"
            role="img"
            aria-label="Klea Turhani profile"
            style={{ backgroundImage: `url(${photo})` }}
          ></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;