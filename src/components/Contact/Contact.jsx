import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';

const Contact = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: '',    
    email: '',
    project: '',
  });

  const isFormValid = Object.values(formValues).every(value => Boolean(value));

  const handleChange = e => {  
    setFormValues(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
     
      emailjs.sendForm(
      'service_1k3tn9g', 
      'template_rb3auz8', 
      form.current, 
      '7-WynoRKKMj1-smZ7'
      );

      e.target.reset();
 
  };

  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">kleaturhani@gmail.com</span>

              <a href="mailto:jora.likaa@gmail.com" className="contact_button">
                Write me 
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>

              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">+39 349 665 8164</span>

              <a href="https://api.whatsapp.com/send?phone=+393496658164&text=Hello, more information!" className="contact_button">
                Write me 
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
             
               <div className="contact_card">
              <i className="bx bx-briefcase contact_card-icon"></i>
              <h3 className="contact_card-title">Upwork</h3>
              <span className="contact_card-data">Freelance Profile</span>
              <a href="https://www.upwork.com/freelancers/~01b539b59b81c8bd57/" target="_blank" rel="noreferrer" className="contact_button">
                Hire me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bx-briefcase-alt-2 contact_card-icon"></i>
              <h3 className="contact_card-title">Fiverr</h3>
              <span className="contact_card-data">Freelance Profile</span>
              <a href="https://www.fiverr.com/klea_turhani" target="_blank" rel="noreferrer" className="contact_button">
                Hire me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input 
                type="text" 
                name='name' 
                value={formValues.name}
                onChange={handleChange}
                className='contact_form-input' 
                placeholder='Insert your name'
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">E-Mail</label>
              <input 
                type="email" 
                name='email' 
                value={formValues.email}
                onChange={handleChange}
                className='contact_form-input' 
                placeholder='Insert your email'
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Project</label>
              <textarea 
                name="project" 
                className='contact_form-input'
                cols="30" 
                rows="10"
                value={formValues.project}
                onChange={handleChange}
                placeholder='Write your project'>
              </textarea>
            </div>

            <button href="#contact" className="button button--flex" disabled={!isFormValid}>
                Send Message <i className="bx bx-send contact_data-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
