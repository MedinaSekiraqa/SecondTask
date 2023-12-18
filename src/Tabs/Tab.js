// App.js
import React from 'react';
import TabComponent from './TabComponent';

const App = () => {
    const tabData = [
        {
          title: 'Domains',
          cards: [
            {
              title: '.Com',
              price: '$5.99/yr',
              name: 'Instead of $10.99/yr',
              buttonText: 'Buy Now',
            },
            {
              title: '.AI',
              price: '$55.99/yr',
              name: 'Instead of $10.99/yr',
              buttonText: 'Buy Now',
            },
            {
                title: '.NET',
                price: '$7.99/yr',
                name: 'Instead of $10.99/yr',
                buttonText: 'Buy Now',
              },
              {
                title: '.HEALTH',
                price: '$7.99/yr',
                name: 'Instead of $10.99/yr',
                buttonText: 'Buy Now',
              },
              {
                title: '.CO.UK',
                price: '$3.99/yr',
                name: 'Instead of $10.99/yr',
                buttonText: 'Buy Now',
              },
              {
                title: '.ORG',
                price: '$15.99/yr',
                name: 'Instead of $10.99/yr',
                buttonText: 'Buy Now',
              },
              {
                title: '.CO',
                price: '$26.99/yr',
                name: 'Instead of $10.99/yr',
                buttonText: 'Buy Now',
              },
              {
                title: '.SEA',
                price: '$26.99/yr',
                name: 'Instead of $10.99/yr',
                buttonText: 'Buy Now',
              },
            
          ],
        },
        {
          title: 'Web Hosting',
          cards: [
            {
                title: '.FOOD',
                price: '$19.99/yr',
                name: 'Instead of $30.99/yr',
                buttonText: 'Buy Now',
              },
              {
                title: '.WEB',
                price: '$24.99/yr',
                name: 'Instead of $30.99/yr',
                buttonText: 'Buy Now',
              },
              {
                  title: '.OR',
                  price: '$19.99/yr',
                  name: 'Instead of $30.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                  title: '.PR',
                  price: '$4.99/yr',
                  name: 'Instead of $30.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                  title: '.Product',
                  price: '$9.99/yr',
                  name: 'Instead of $30.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                  title: '.OR2',
                  price: '$2.99/yr',
                  name: 'Instead of $30.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                  title: '.WE',
                  price: '$1.99/yr',
                  name: 'Instead of $30.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                  title: '.AI',
                  price: '$00.99/yr',
                  name: 'Instead of $30.99/yr',
                  buttonText: 'Buy Now',
                },
            
          ],
        },
        {
            title: 'Dedicated Servers',
            cards: [
              {
                  title: '.Pr',
                  price: '$9.99/yr',
                  name: 'Instead of $20.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                  title: '.LIFE',
                  price: '$25.99/yr',
                  name: 'Instead of $30.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                    title: '.Product 1',
                    price: '$9.99/yr',
                    name: 'Instead of $30.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.COM',
                    price: '$24.99/yr',
                    name: 'Instead of $30.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.CO',
                    price: '$19.99/yr',
                    name: 'Instead of $30.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.SEA2',
                    price: '$24.99/yr',
                    name: 'Instead of $30.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.CO.PR',
                    price: '$19.99/yr',
                    name: 'Instead of $30.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.LIFE',
                    price: '$24.99/yr',
                    name: 'Instead of $30.99/yr',
                    buttonText: 'Buy Now',
                  },
            
            ],
          },
          {
            title: 'Virtual Cloud Servers',
            cards: [
              {
                  title: '.VR',
                  price: '$19.99/yr',
                  name: 'Instead of $40.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                  title: '.VR1',
                  price: '$44.99/yr',
                  name: 'Instead of $40.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                    title: '.CLOUD',
                    price: '$19.99/yr',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.Pro',
                    price: '$24.99/yr',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'ORG',
                    price: '$19.99/yr',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.SRV',
                    price: '$24.99/yr',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.SE',
                    price: '$19.99/yr',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.PO',
                    price: '$24.99/yr',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
              
            ],
          },
          {
            title: 'WordPress Hosting',
            cards: [
              {
                  title: '.WORD',
                  price: '$19.99/yr',
                  name: 'Instead of $40.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                  title: '.PRESS',
                  price: '$24.99/yr',
                  name: 'Instead of $40.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                    title: '.PR4',
                    price: '$19.99/yr',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.OP',
                    price: '$23.99',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.AI!',
                    price: '$99.99/yr',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.LO',
                    price: '$4.99/yr',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.P',
                    price: '$19.99/yr',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.POOO',
                    price: '$24.99/yr',
                    name: 'Instead of $40.99/yr',
                    buttonText: 'Buy Now',
                  },
            
            ],
          },
          {
            title: 'Email Hosting',
            cards: [
              {
                  title: '.TEA',
                  price: '$19.99/yr',
                  name: 'Instead of $60.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                  title: '.LOVE',
                  price: '$24.99/yr',
                  name: 'Instead of $60.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                    title: '.PJ',
                    price: '$19.99/yr',
                    name: 'Instead of $60.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.DOR',
                    price: '$33.99/y',
                    name: 'Instead of $60.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.OL',
                    price: '$19.99/yr',
                    name: 'Instead of $60.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.PRO2',
                    price: '$24.99/yr',
                    name: 'Instead of $60.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.PJJ',
                    price: '$19.99/yr',
                    name: 'Instead of $60.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.LLLLL',
                    price: '$24.99/yr',
                    name: 'Instead of $60.99/yr',
                    buttonText: 'Buy Now',
                  },
              
            ],
          },
          {
            title: 'VPS Hosting Servers',
            cards: [
              {
                  title: '.VPS',
                  price: '$19.99/yr',
                  name: 'Instead of $70.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                  title: '.HOSTING',
                  price: '$24.99',
                  name: 'Instead of $70.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                    title: '.HOST',
                    price: '$19.99/yr',
                    name: 'Instead of $70.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.HO',
                    price: '$24.99/yr',
                    name: 'Instead of $70.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.VPS2',
                    price: '$19.99/yr',
                    name: 'Instead of $70.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.IIIII',
                    price: '$24.99/yr',
                    name: 'Instead of $70.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.AAAA',
                    price: '$19.99/yr',
                    name: 'Instead of $70.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.KKKK',
                    price: '$24.99/yr',
                    name: 'Instead of $70.99/yr',
                    buttonText: 'Buy Now',
                  },
              
            ],
          },
          {
            title: 'Free Hosting',
            cards: [
              {
                  title: '.FREE',
                  price: '$19.99/yr',
                  name: 'Instead of $80.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                  title: '.HOSTING',
                  price: '$24.99/yr',
                  name: 'Instead of $80.99/yr',
                  buttonText: 'Buy Now',
                },
                {
                    title: '.HOSTIII',
                    price: '$1.99/yr',
                    name: 'Instead of $80.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.OD',
                    price: '$24.99/yr',
                    name: 'Instead of $80.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.RR',
                    price: '$19.99',
                    name: 'Instead of $80.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.11111',
                    price: '$24.99/yr',
                    name: 'Instead of $80.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.9999',
                    price: '$19.99/yr',
                    name: 'Instead of $80.99/yr',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: '.VPS#',
                    price: '$24.99/yr',
                    name: 'Instead of $80.99/yr',
                    buttonText: 'Buy Now',
                  },
              
            ],
          },
        
        
        
       
  ];

  return (
    <div className="App">
      
      <TabComponent tabData={tabData} />
    </div>
  );
};

export default App;

