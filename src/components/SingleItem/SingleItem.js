import React from 'react';

const SingleItem = ({currentItem}) => {
    return (
        <div className={styles.singleItem}>
            <img className="img-fluid" src={currentItem.image} alt="" />
            <div>
                <p>{currentItem.title}</p>
                <p>{currentItem.description}</p>
                <p>{currentItem.price}</p>
                <button className="btn btn-primary">Add To Cart</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        currentItem: state.shop.currentItem,
    };
};

export default SingleItem;