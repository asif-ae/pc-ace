import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shoppingActions';
import productStyles from '../Products/Product/Product.module.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const { textBlue, textCrimson } = productStyles;

const SingleItem = ({currentItem, addToCart}) => {
    return (
        <Fragment>
            <Navbar></Navbar>
            <div className="container">
                <div className="py-5">
                    <div className="row p-0 m-0 d-flex align-items-center">
                        <div className="col-md-6">
                            <div className="p-3">
                                <img className="img-fluid" src={currentItem.image} alt={currentItem.title} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h2 className={`py-3 ${textBlue}`}>{currentItem.title}</h2>
                                <p className="mb-1">{currentItem.description}</p>
                                <h3 className={`py-3 ${textCrimson}`}>${currentItem.price}</h3>
                                <div className="row m-0 p-0">
                                    <div className="col-6 m-0 p-0">
                                        <button onClick={() => addToCart(currentItem.id)} className="btn btn-success text-uppercase">Add To Cart</button>
                                    </div>
                                    <div className="col-6 m-0 p-0 text-end">
                                        <Link to="/products">
                                            <button className="btn btn-primary text-uppercase">See All Products</button>
                                        </Link>
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

const mapStateToProps = (state) => {
    return{
        currentItem: state.shop.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (id) => dispatch(addToCart(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);