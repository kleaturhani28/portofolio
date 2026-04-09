import React from 'react';
import CertificationsWorks from './CertificationsWorks';
import './certifications.scss';

const Certifications = () => {
  return (
    <section className="certifications section" id="certifications">
      <h2 className="section_title">Certifications</h2>
      <span className="section_subtitle">Courses & badges</span>

      <CertificationsWorks />
    </section>
  );
};

export default Certifications;
