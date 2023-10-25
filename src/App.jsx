import React, { useState } from 'react';
import Product from './Product';
import './App.css';
import Heading from './Heading';

const App = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [quanityImageArray, setQuanityImageArray] = useState(Array(12).fill([]));

  const updateQuantityImageArray = (index, data) => {
    setQuanityImageArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = data;
      return newArray;
    });
  };

  return (
    <div className='cartpage'>
      <Heading quanityImageArray={quanityImageArray} className="heading" />
      <div className='Products'>
        {items.map((item, index) => (
          <Product
            key={index}
            number={item}
            quanityImageArray={quanityImageArray}
            index={index}
            updateQuantityImageArray={updateQuantityImageArray}
          />
        ))}
      </div>
          
     
    </div>
  );
};

export default App;
