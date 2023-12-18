import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the default styles
import './TabComponent.css';

const TabComponent = ({ tabData }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
      <TabList className="tab-list">
        <div className='headings'>
            {tabData.map((tab, index) => (
            // Apply custom styles to the Tab
            <Tab className="tab" key={index}>
              {tab.title}
            </Tab>
          ))}
        </div>
        </TabList>

        {tabData.map((tab, index) => (
          <TabPanel key={index}>
            <div className="card-container">
              {tab.cards.map((card, cardIndex) => (
                <div className="card" key={cardIndex}>
                  <h3>{card.title}</h3>
                  <p>{` ${card.price}`}</p>
                  <p>{` ${card.name}`}</p>
                  <button>{card.buttonText}</button>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabComponent;
