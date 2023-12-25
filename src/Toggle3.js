import React, { useState } from 'react';
import './Toogle3.css';

const Toggle3 = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [subActiveIndex, setSubActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleSubAccordion = (subIndex) => {
    setSubActiveIndex((prevIndex) => (prevIndex === subIndex ? null : subIndex));
  };

  const accordionData = [
    {
      title: 'About Us',
      paragraph: "4 articles in this Topic",
      logo: '../logo.png',
      
      nestedItems: [
        {
          title: 'How does Parkname seperate itself from other domain name parking companies?',
          content: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains? As a professional domainer, you will find everything need through Parkname to generate maximum profits from your domain portfolio.',
        },
        {
          title: 'Is Parkname Parking actually free?',
          content: 'No it is not free',
        },
        {
            title: 'What you do?',
            content: 'Nothing',
        },
        {
            title: 'When was Parkname first founded?',
            content: 'Parkname was founded last week',
        },
      ],
    },
  ];

  return (
    <div className='acordion'>
      {accordionData.map((item, index) => (
        <div key={index} className="item">
          <div
            className={`header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <img src={item.logo} alt="Logo" className="logo" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          </div>
          {activeIndex === index && (
            <div className="body">
              {item.content}
              {item.nestedItems && (
                <div className="nested-accordion">
                  {item.nestedItems.map((nestedItem, subIndex) => (
                    <div key={subIndex} className="item">
                      <div
                        className={`header ${subActiveIndex === subIndex ? 'active' : ''}`}
                        onClick={() => toggleSubAccordion(subIndex)}
                      >
                        {nestedItem.title}
                      </div>
                      {subActiveIndex === subIndex && (
                        <div className="body-item">
                         {nestedItem.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default Toggle3;
