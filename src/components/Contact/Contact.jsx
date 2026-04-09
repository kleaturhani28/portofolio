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

  const isFormValid = Object.values(formValues).every((value) => value.trim() !== '');

  const handleChange = (e) => {
    setFormValues((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9h9pf5j',
        'template_3njbnis',
        form.current,
        'PmWsUdn5S4gSk1eRm'
      )
      .then(() => {
        alert('Message sent successfully! I will get back to you soon.');

        setFormValues({
          name: '',
          email: '',
          project: '',
        });
      })
      .catch((error) => {
        console.error('Email sending error:', error);
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in Touch</h2>
      <span className="section_subtitle">Contact me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">kleaturhani@gmail.com</span>

              <a href="mailto:kleaturhani@gmail.com" className="contact_button">
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>

              <h3 className="contact_card-title">WhatsApp</h3>
              <span className="contact_card-data">+39 349 665 8164</span>

              <a
                href="https://api.whatsapp.com/send?phone=393496658164&text=Hello, I would like more information."
                className="contact_button"
                target="_blank"
                rel="noreferrer"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bx-briefcase contact_card-icon"></i>
              <h3 className="contact_card-title">Upwork</h3>
              <span className="contact_card-data">Professional  Profile</span>
              <a
                href="https://www.upwork.com/freelancers/~01b539b59b81c8bd57/"
                target="_blank"
                rel="noreferrer"
                className="contact_button"
              >
                View profile
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bx-briefcase-alt-2 contact_card-icon"></i>
              <h3 className="contact_card-title">Fiverr</h3>
              <span className="contact_card-data">Professional  Profile</span>
              <a
                href="https://www.fiverr.com/klea_turhani"
                target="_blank"
                rel="noreferrer"
                className="contact_button"
              >
                View profile
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write me about your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="contact_form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Email</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="contact_form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Project</label>
              <textarea
                name="project"
                className="contact_form-input"
                cols="30"
                rows="10"
                value={formValues.project}
                onChange={handleChange}
                placeholder="Tell me about your project"
              ></textarea>
            </div>

            <button type="submit" className="button button--flex" disabled={!isFormValid}>
              Send Message <i className="bx bx-send contact_data-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;