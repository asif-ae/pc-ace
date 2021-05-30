import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addToCart, loadCurrentItem } from "../../../redux/Shopping/shoppingActions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  console.log(product.id);
  return (
    <Fragment>
      <div className="container">
        <img src={product.image} alt={product.title} className="w-100" />

        <div>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>$ {product.price}</p>
        </div>

        <div>
          <Link onClick={() => loadCurrentItem(product)} to={`/product/${product.id}`}>
            <button>View Item</button>
          </Link>
          <button onClick={() => addToCart(product.id)}>Add To Cart</button>
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
