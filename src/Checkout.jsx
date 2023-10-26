import React from 'react';
import './checkos.css';
import { Link } from 'react-router-dom';
import Heading from './Heading';

const Checkout = ({ quanityImageArray }) => {
  return (
    <div className='checkout'>
      <Heading quanityImageArray={quanityImageArray} className='heading' />
      {quanityImageArray.map((item, index) => (
        <div className='product' key={index}>
          <img src={item[0]} className='productImage' />
          <div className='textBox'>Price: {item[1] * item[2]}</div>
        </div>
      ))}
      <Link to='/'>Click here to go back</Link>
    </div>
  );
};

export default Checkout;
