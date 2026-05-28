import React, { useEffect, useState } from 'react';
import './header.scss';
import Logo from '../../assets/logoweb.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector('.header');
      if (!header) return;

      if (window.scrollY >= 80) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    setToggle(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a
          href="#home"
          className="nav_logo"
          aria-label="Go to home section"
          onClick={() => handleNavClick('#home')}
        >
          <img src={Logo} alt="Klea Turhani logo" />
        </a>

        <div className={toggle ? 'nav_menu show-menu' : 'nav_menu'}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => handleNavClick('#home')}
                className={activeNav === '#home' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-estate nav_icon" /> Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                onClick={() => handleNavClick('#about')}
                className={activeNav === '#about' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-user nav_icon" /> About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => handleNavClick('#skills')}
                className={activeNav === '#skills' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-file-alt nav_icon" /> Skills
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#services"
                onClick={() => handleNavClick('#services')}
                className={activeNav === '#services' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-briefcase-alt nav_icon" /> Services
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#portfolio"
                onClick={() => handleNavClick('#portfolio')}
                className={activeNav === '#portfolio' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-heart nav_icon" /> Portfolio
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className={activeNav === '#contact' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-message nav_icon" /> Contact
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="nav_close"
            onClick={() => setToggle(false)}
            aria-label="Close menu"
          >
            <i className="uil uil-times" />
          </button>
        </div>

        <button
          type="button"
          className="nav_toggle"
          onClick={() => setToggle(!toggle)}
          aria-label="Open menu"
          aria-expanded={toggle}
        >
          <i className="uil uil-apps" />
        </button>
      </nav>
    </header>
  );
};

export default Header;