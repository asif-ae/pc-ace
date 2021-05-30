import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, adjustQTY } from '../../../redux/Shopping/shoppingActions';
import customStyles from '../../Products/Product/Product.module.css';

const { textBlue, textCrimson } = customStyles;

const CartItem = ({ item, removeFromCart, adjustQTY }) => {
  const [input, setInput] = useState(item.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQTY(item.id, e.target.value)
  }
  return (
    <Fragment>
      <div className="pb-3">
        <div className="p-3 shadow rounded">
          <div className="row m-0 p-0 d-flex align-items-center">
            <div className="col-3">
              <img src={item.image} alt={item.title} className="w-100" />
            </div>
            <div className="col-9">
              <div className="p-3">
                <div className="a">
                  <h3 className={`${textBlue}`}>{item.title}</h3>
                  <p className="mb-1">{item.description}</p>
                  <h4 className={`${textCrimson}`}>${item.price}</h4>
                </div>
                <div className="row p-0 m-0">
                  <div className="col-6 p-0 m-0">
                    <div className="form-floating mb-3">
                      <input type="number" name="qty" className="form-control" id="floatingInput" min="1" value={input} onChange={onChangeHandler} />
                      <label htmlFor="qty">Quantity</label>
                    </div>
                  </div>
                  <div className="col-6 text-end">
                    <div className="pt-2 pe-5">
                      <button onClick={() => removeFromCart(item.id)} className="btn btn-outline-danger text-uppercase">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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