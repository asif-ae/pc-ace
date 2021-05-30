import React, { Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Product from "./Product/Product";
const Products = ({ products }) => {
  console.log(products);
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="container">
        <div className="row m-0 p-0">
          {products.map((product) => (
            <Product key={product.id} productData={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
