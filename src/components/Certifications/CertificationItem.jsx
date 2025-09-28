import React from 'react';

const CertificationItem = ({ item }) => {
  return (
    <div className="cert_card" key={item.id}>
      <div className="cert_header">
        <i className="uil uil-award cert_icon"></i>
        <h3 className="cert_title">{item.title}</h3>
      </div>

      <span className="cert_category">{item.category}</span>

      {item.link ? (
        <a
          href={item.link}
          className="button button--flex cert_button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate <i className="uil uil-external-link-alt"></i>
        </a>
      ) : (
        <span className="button button--ghost cert_button">
          No Link <i className="uil uil-times-circle"></i>
        </span>
      )}
    </div>
  );
};

export default CertificationItem;
