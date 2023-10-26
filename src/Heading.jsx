import React from 'react';
import './heading.css';
import {Link} from "react-router-dom";

const Heading = ({ quanityImageArray }) => {
  let itemsTotal = 0;

  if (quanityImageArray) {
    quanityImageArray.forEach((item) => {
      if (item && item.length === 3) {
        itemsTotal += item[1] * item[2];
      }
    });
  }

  if (isNaN(itemsTotal)) {
    itemsTotal = 0;
  }
  function buttonHandle(){
    
  }
  return (
    <div className='Headings'>
      <img className='imageSource' src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png' />
      <div className='HeadingQuantity'>
        <Link to="checkout"><button className='buttons' onClick={buttonHandle}>Checkout</button></Link>
        <div>Total: {itemsTotal}</div>
      </div>
    </div>
  );
};

export default Heading;
