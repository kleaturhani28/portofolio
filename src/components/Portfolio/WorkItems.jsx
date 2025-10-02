// WorkItems.jsx
import React from 'react';

const WorkItems = ({ item }) => {
  const hasLink =
    typeof item.link === 'string' &&
    /^https?:\/\//i.test(item.link.trim());

  const handleOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasLink) window.open(item.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="work_card">
      {item.image && <img src={item.image} alt={item.title} className="work_img" />}
      <h3 className="work_title">{item.title}</h3>

      {hasLink ? (
        <a
          href={item.link}
          className="work_button"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleOpen}   // <— apertura forzata
        >
          Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </a>
      ) : (
        <span className="work_button work_button--ghost">
          No link <i className="bx bx-block work_button-icon"></i>
        </span>
      )}
    </div>
  );
};

export default WorkItems;
