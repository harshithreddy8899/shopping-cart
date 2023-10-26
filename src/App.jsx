import React, { useState } from 'react';
import Product from './Product';
import './App.css';
import Heading from './Heading';

const App = ({quanityImageArray,updateQuantityImageArray}) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  

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
