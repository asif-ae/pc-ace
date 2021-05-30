import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import CartItem from './CartItem/CartItem';
import customStyles from '../Products/Product/Product.module.css';
import { removeFromCart } from '../../redux/Shopping/shoppingActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const { textBlue, textCrimson } = customStyles;

const Cart = ({cart, removeFromCart}) => {
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
    await alert("Thank you! Your order has been placed successfully! Please, check your email!");
    cart.forEach(items => {
      removeFromCart(items.id);
    });
  }

  const noProductAlert = () => {
    return (
      <div className="py-5">
        <div class="alert alert-primary d-flex align-items-center justify-content-center" role="alert">
          <div style={{fontSize: "20px"}}>
            <span className="p-3"><FontAwesomeIcon icon={faInfoCircle} size="lg"></FontAwesomeIcon></span>
            Oops! Your cart is empty!
          </div>
        </div>
        <div className="py-5 text-center">
          <Link to="/products">
            <button className="btn btn-success text-uppercase" style={{fontSize: "20px"}}>Shop Now</button>
          </Link>
        </div>
      </div>
    )
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
                  !cart.length && noProductAlert()
                }
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
                    <button onClick={() => {cart.length && successMessage();}} className="btn btn-outline-success text-uppercase">Proceed To Checkout!</button>
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

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);