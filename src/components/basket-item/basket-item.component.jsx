import React from "react";
import { connect } from "react-redux";

import { clearItemsFromCart, addItem } from "../../redux/cart/cart.actions";

import "./basket-item.styles.scss";

const BasketItem = ({ cartItem, clearItems, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='basket-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItems(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItems: (item) => dispatch(clearItemsFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(BasketItem);
