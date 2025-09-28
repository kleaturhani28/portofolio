import React from 'react';
import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Certifications from './components/Certifications/Certifications';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/Scrollup/ScrollUp';
import './App.scss';


const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Certifications />
        <Qualification />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
