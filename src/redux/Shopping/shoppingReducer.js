import * as actionTypes from "./shoppingTypes";
import productsData from "../../data/products";

const INITIAL_STATE = {
  products: productsData, // Each product contains {id, title, description, price, image}
  cart: [], // Each product contains {id, title, description, price, image, qty}
  currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_CART:
      // Set the items data from the products array
      const item = state.products.find(product => product.id === action.payload.id);
      // Check if item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === item.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
        ?
        state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item)
        :
        [...state.cart, {...item, qty: 1}],
      }
    case actionTypes.REMOVE_FROM_CART:
      return {}
    case actionTypes.ADJUST_QTY:
      return {}
    case actionTypes.LOAD_CURRENT_ITEM:
      return {}
    default:
      return state;
  }
}

export default shopReducer;