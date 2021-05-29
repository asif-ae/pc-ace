import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import CartItem from './CartItem/CartItem';

const Cart = ({cart}) => {
  console.log(cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;
    
    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, setTotalPrice, totalItems, setTotalItems])
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="a">
        <div className="b">
          {
            cart.map(item => <CartItem item={item} key={item.id}></CartItem>)
          }
        </div>
        <div className="a">
          <h4 className="a">Cart Summery</h4>
          <div className="a">
            <span className="a">Total: {totalItems} item(s)</span>
            <span className="a">${totalPrice}</span>
          </div>
          <button className="a">Proceed To Checkout!</button>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart,
  }
}

export default connect(mapStateToProps)(Cart);