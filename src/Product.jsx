import React, { useState, useEffect } from 'react';
import './product.css';

const Product = ({ number, quanityImageArray, index, updateQuantityImageArray }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${number}`)
      .then((res) => res.json())
      .then((data) => {
        setImageSrc(data.image);
        setPrice(data.price);
      });
  }, [number]);

  function handleClickPlus() {
    setQuantity(quantity + 1);
  }

  function handleClickMinus() {
    if (quantity > 0) setQuantity(quantity - 1);
  }

  const changeQuantity = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setQuantity(newValue);
    } else {
      setQuantity(0);
    }
  };

  useEffect(() => {
    const quantityImageTemp = [imageSrc, price, quantity];
    updateQuantityImageArray(index, quantityImageTemp);
  }, [quantity, imageSrc, price]);

  return (
    <div className="product">
      <img src={imageSrc} className="productImage" />
      <div className="quantity">
        {console.log("hi")}
        <button onClick={handleClickMinus} className="buttonSize">-</button>
        <input type="text" value={quantity} onChange={changeQuantity} className="textBox1" />
        <button onClick={handleClickPlus} className="buttonSize">+</button>
      </div>
      <div className="Price">{price}</div>
    </div>
  );
};

export default Product;
