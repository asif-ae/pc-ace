import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, adjustQTY } from '../../../redux/Shopping/shoppingActions';

const CartItem = ({ item, removeFromCart, adjustQTY }) => {
  const [input, setInput] = useState(item.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQTY(item.id, e.target.value)
  }
  return (
    <Fragment>
      <div className="a">
        <img src={item.image} alt={item.title} />
        <div className="a">
          <p className="a">{item.title}</p>
          <p className="b">{item.description}</p>
          <p className="c">${item.price}</p>
        </div>
        <div className="a">
          <div className="b">
            <label htmlFor="qty">Quantity</label>
            <input type="number" name="qty" id="qty" min="1" value={input} onChange={onChangeHandler} />
          </div>
          <button onClick={() => removeFromCart(item.id)} className="a">
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQTY: (id, value) => dispatch(adjustQTY(id, value))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);