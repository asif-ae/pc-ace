import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import CartItem from './CartItem/CartItem';
import customStyles from '../Products/Product/Product.module.css';

const { textBlue, textCrimson } = customStyles;

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
    setTotalPrice(price.toFixed(2));
    setTotalItems(items);
  }, [cart, totalPrice, setTotalPrice, totalItems, setTotalItems]);

  const successMessage = async () => {
    await alert("Hello! I am an alert box!");
  }
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="container">
        <div className="py-3">
          <div className="row p-0 m-0">
            <div className="col-md-7">
              <div className="py-3">
                {
                  cart.map(item => <CartItem item={item} key={item.id}></CartItem>)
                }
              </div>
            </div>
            <div className="col-md-5">
              <div className="py-3">
                <div className="p-3 shadow rounded">
                  <h2 className="a">Cart Summery</h2>
                  <div className="a">
                    <h5 className="a">Item(s): <span className={`${textBlue}`}>{totalItems} item(s)</span></h5>
                  </div>
                  <div className="a">
                    <h4 className="a">Total Prise: <span className={`${textCrimson}`}>${totalPrice}</span></h4>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button onClick={() => {successMessage(); setTotalPrice(0); setTotalItems(0);}} className="btn btn-outline-success text-uppercase">Proceed To Checkout!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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