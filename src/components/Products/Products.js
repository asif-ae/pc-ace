import React from "react";
import { connect } from "react-redux";
import Product from "./Product/Product";
const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
