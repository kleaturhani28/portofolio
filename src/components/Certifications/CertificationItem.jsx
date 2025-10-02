import React from 'react';

const CertificationItem = ({ item }) => {
  const hasLink  = typeof item.link === 'string' && item.link.trim().length > 0;
  const hasImage = typeof item.image === 'string' && item.image.trim().length > 0;

  return (
    <div className="cert_card" key={item.id}>
      <div className="cert_header">
        <i className="uil uil-award cert_icon"></i>
        <h3 className="cert_title">{item.title}</h3>
      </div>

      <span className="cert_category">{item.category}</span>

      {hasLink ? (
        <a
          href={item.link}
          className="button button--flex cert_button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate <i className="uil uil-external-link-alt"></i>
        </a>
      ) : hasImage ? (
        <img src={item.image} alt={item.title} className="cert_image" loading="lazy" />
      ) : (
        <span className="button button--ghost cert_button">No Link</span>
      )}
    </div>
  );
};

export default CertificationItem;
