import { Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import NotMatched from "./components/NotMatched/NotMatched";
import Product from "./components/Products/Product/Product";
import Products from "./components/Products/Products";

function App({ currentItem }) {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          {
            !currentItem ? (
              <Redirect to="/"></Redirect>
            ) : (
              <Route path="/product/:id">
                {/* <Product></Product> */}
              </Route>
            )
          }
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="*">
            <NotMatched></NotMatched>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  }
}

export default connect(mapStateToProps)(App);
