import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';

const CartItem = ({item}) => {
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
            <input type="number" name="qty" id="qty" min="1" value={item.qty} />
          </div>
          <button className="a">
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;