import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addToCart, loadCurrentItem } from "../../../redux/Shopping/shoppingActions";

const Product = ({ productData, addToCart, loadCurrentItem }) => {
  return (
    <Fragment>
      <div>
        <img src={productData.image} alt={productData.title} className="w-100" />

        <div>
          <p>{productData.title}</p>
          <p>{productData.description}</p>
          <p>${productData.price}</p>
        </div>

        <div>
          <Link onClick={() => loadCurrentItem(productData)} to={`/product/${productData.id}`}>
            <button>View Item</button>
          </Link>
          <button onClick={() => addToCart(productData.id)}>Add To Cart</button>
          {console.log(productData.id)}
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
