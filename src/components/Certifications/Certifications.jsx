import React from 'react';
import CertificationsWorks from './CertificationsWorks';
import './certifications.scss';

const Certifications = () => {
  return (
    <section className="certifications section" id="certifications">
      <h2 className="section_title">My Certifications</h2>
      <span className="section_subtitle">Courses & Badges</span>

      <CertificationsWorks />
    </section>
  );
};

export default Certifications;
