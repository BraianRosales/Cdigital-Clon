import React from 'react';

const amount = <span className='total-price'>$0,00</span>
const products = <span className='quantify-products'><span className='number'>0</span></span>

const CartWidget = () => {
  return <div>
      <i className="fas fa-shopping-cart cartWidget">{amount}{products}</i>
  </div>;
};

export default CartWidget;
