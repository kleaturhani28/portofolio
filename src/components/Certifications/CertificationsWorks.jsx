import React, { useState, useEffect } from 'react';
import CertificationItem from './CertificationItem';
import { certificationsData, certificationsNav } from './CertificationsData';

const CertificationsWorks = () => {
  const [filter, setFilter] = useState({ name: 'all' });
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (filter.name === 'all') {
      setItems(certificationsData);
    } else {
      const newItems = certificationsData.filter((c) =>
        c.category.toLowerCase() === filter.name.toLowerCase()
      );
      setItems(newItems);
    }
  }, [filter]);

  const handleClick = (e, index) => {
    setFilter({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="work_filters">
        {certificationsNav.map((nav, index) => (
          <span
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? 'active-work' : ''} work_item`}
          >
            {nav.name}
          </span>
        ))}
      </div>

      <div className="work_container container grid">
        {items.map((item) => (
          <CertificationItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CertificationsWorks;
