import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import productStyles from './Product.module.css';
import { connect } from "react-redux";
import { addToCart, loadCurrentItem } from "../../../redux/Shopping/shoppingActions";

const { btnView, textBlue, textCrimson } = productStyles;

const Product = ({ productData, addToCart, loadCurrentItem }) => {
  return (
    <Fragment>
      <div className="col-md-4">
        <div className="py-2">
          <div className="shadow rounded p-3">
            <div className="text-center p-3">
              <div style={{height: "300px", width: "auto"}}>
                <img src={productData.image} alt={productData.title} style={{maxHeight: "300px", maxWidth: "100%"}} />
              </div>
            </div>
            <h4 className={`${textCrimson}`}>{productData.title}</h4>
            <p>{productData.description}</p>
            <h3 className={`pb-2 ${textBlue}`}>${productData.price}</h3>
            <div className="d-flex justify-content-around">
              <Link onClick={() => loadCurrentItem(productData)} to={`/product/${productData.id}`}>
                <button className={`btn ${btnView} text-uppercase`}>View Item</button>
              </Link>
              <button onClick={() => addToCart(productData.id)} className="btn btn-success text-uppercase">Add To Cart</button>
              {console.log(productData.id)}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
