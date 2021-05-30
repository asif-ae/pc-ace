import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shoppingActions';
import Navbar from '../Navbar/Navbar';

const SingleItem = ({currentItem, addToCart}) => {
    return (
        <Fragment>
            <Navbar></Navbar>
            <div className="row p-0 m-0">
                <img className="img-fluid" src={currentItem.image} alt={currentItem.title} />
            </div>
            <div>
                <p>{currentItem.title}</p>
                <p>{currentItem.description}</p>
                <p>{currentItem.price}</p>
                <button onClick={() => addToCart(currentItem.id)} className="btn btn-brand">Add To Cart</button>
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