import * as actionTypes from "./shoppingTypes";

const INITIAL_STATE = {
  products: [], // Each product contains {id, title, description, price, image}
  cart: [], // Each product contains {id, title, description, price, image, qty}
  currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_CART:
      return {}
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