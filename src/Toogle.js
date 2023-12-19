import React, { useState } from 'react';
import './Toogle.css'

const Toogle = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title: 'Why park a domain name in Parkname?',
      content: "Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achive success.",
    },
  ];

  return (
    <div className='acordian-container'>
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div className="accordion-body">
              <strong>{item.content}</strong>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Toogle;
