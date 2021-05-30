import { Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import NotMatched from "./components/NotMatched/NotMatched";
import Products from "./components/Products/Products";
import SingleItem from "./components/SingleItem/SingleItem";

function App({ currentItem }) {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
          {
            !currentItem ? (
              <Redirect to="/"></Redirect>
            ) : (
              <Route exact path="/product/:id">
                <SingleItem></SingleItem>
              </Route>
            )
          }
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
