// App.js
import React from 'react';
import TabComponent from './TabComponent';

const App = () => {
    const tabData = [
        {
          title: 'Domains',
          cards: [
            {
              title: 'Product 1',
              price: '$19.99',
              name: 'John Doe',
              buttonText: 'Buy Now',
            },
            {
              title: 'Product 2',
              price: '$24.99',
              name: 'Alice Smith',
              buttonText: 'Buy Now',
            },
            {
                title: 'Product 1',
                price: '$19.99',
                name: 'John Doe',
                buttonText: 'Buy Now',
              },
              {
                title: 'Product 2',
                price: '$24.99',
                name: 'Alice Smith',
                buttonText: 'Buy Now',
              },
              {
                title: 'Product 1',
                price: '$19.99',
                name: 'John Doe',
                buttonText: 'Buy Now',
              },
              {
                title: 'Product 2',
                price: '$24.99',
                name: 'Alice Smith',
                buttonText: 'Buy Now',
              },
              {
                title: 'Product 1',
                price: '$19.99',
                name: 'John Doe',
                buttonText: 'Buy Now',
              },
              {
                title: 'Product 2',
                price: '$24.99',
                name: 'Alice Smith',
                buttonText: 'Buy Now',
              },
            // Repeat the structure for cards 3 to 8
          ],
        },
        {
          title: 'Web Hosting',
          cards: [
            {
                title: 'Product 1',
                price: '$19.99',
                name: 'John Doe',
                buttonText: 'Buy Now',
              },
              {
                title: 'Product 2',
                price: '$24.99',
                name: 'Alice Smith',
                buttonText: 'Buy Now',
              },
              {
                  title: 'Product 1',
                  price: '$19.99',
                  name: 'John Doe',
                  buttonText: 'Buy Now',
                },
                {
                  title: 'Product 2',
                  price: '$24.99',
                  name: 'Alice Smith',
                  buttonText: 'Buy Now',
                },
                {
                  title: 'Product 1',
                  price: '$19.99',
                  name: 'John Doe',
                  buttonText: 'Buy Now',
                },
                {
                  title: 'Product 2',
                  price: '$24.99',
                  name: 'Alice Smith',
                  buttonText: 'Buy Now',
                },
                {
                  title: 'Product 1',
                  price: '$19.99',
                  name: 'John Doe',
                  buttonText: 'Buy Now',
                },
                {
                  title: 'Product 2',
                  price: '$24.99',
                  name: 'Alice Smith',
                  buttonText: 'Buy Now',
                },
            // Repeat the structure for cards 11 to 16
          ],
        },
        {
            title: 'Dedicated Servers',
            cards: [
              {
                  title: 'Product 1',
                  price: '$19.99',
                  name: 'John Doe',
                  buttonText: 'Buy Now',
                },
                {
                  title: 'Product 2',
                  price: '$24.99',
                  name: 'Alice Smith',
                  buttonText: 'Buy Now',
                },
                {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
              // Repeat the structure for cards 11 to 16
            ],
          },
          {
            title: 'Virtual Cloud Servers',
            cards: [
              {
                  title: 'Product 1',
                  price: '$19.99',
                  name: 'John Doe',
                  buttonText: 'Buy Now',
                },
                {
                  title: 'Product 2',
                  price: '$24.99',
                  name: 'Alice Smith',
                  buttonText: 'Buy Now',
                },
                {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
              // Repeat the structure for cards 11 to 16
            ],
          },
          {
            title: 'WordPress Hosting',
            cards: [
              {
                  title: 'Product 1',
                  price: '$19.99',
                  name: 'John Doe',
                  buttonText: 'Buy Now',
                },
                {
                  title: 'Product 2',
                  price: '$24.99',
                  name: 'Alice Smith',
                  buttonText: 'Buy Now',
                },
                {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
              // Repeat the structure for cards 11 to 16
            ],
          },
          {
            title: 'Email Hosting',
            cards: [
              {
                  title: 'Product 1',
                  price: '$19.99',
                  name: 'John Doe',
                  buttonText: 'Buy Now',
                },
                {
                  title: 'Product 2',
                  price: '$24.99',
                  name: 'Alice Smith',
                  buttonText: 'Buy Now',
                },
                {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
              // Repeat the structure for cards 11 to 16
            ],
          },
          {
            title: 'VPS Hosting Servers',
            cards: [
              {
                  title: 'Product 1',
                  price: '$19.99',
                  name: 'John Doe',
                  buttonText: 'Buy Now',
                },
                {
                  title: 'Product 2',
                  price: '$24.99',
                  name: 'Alice Smith',
                  buttonText: 'Buy Now',
                },
                {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
              // Repeat the structure for cards 11 to 16
            ],
          },
          {
            title: 'Free Hosting',
            cards: [
              {
                  title: 'Product 1',
                  price: '$19.99',
                  name: 'John Doe',
                  buttonText: 'Buy Now',
                },
                {
                  title: 'Product 2',
                  price: '$24.99',
                  name: 'Alice Smith',
                  buttonText: 'Buy Now',
                },
                {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 1',
                    price: '$19.99',
                    name: 'John Doe',
                    buttonText: 'Buy Now',
                  },
                  {
                    title: 'Product 2',
                    price: '$24.99',
                    name: 'Alice Smith',
                    buttonText: 'Buy Now',
                  },
              // Repeat the structure for cards 11 to 16
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

