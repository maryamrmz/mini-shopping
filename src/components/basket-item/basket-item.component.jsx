import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";

import { clearItemsFromCart } from "../../redux/cart/cart.actions";

import "./basket-item.styles.scss";

const BasketItem = ({ cartItem, clearItems }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const handleSubmit = (event) => {
        event.preventDefault();

        clearItems(cartItem);
    };
    return (
        <div className='basket-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='value'>{quantity}</span>
            </span>
            <span className='price'>{price}</span>
            <CustomButton type='submit' onClick={handleSubmit}>
                نهایی کردن سبد
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItems: (item) => dispatch(clearItemsFromCart(item)),
});

export default connect(null, mapDispatchToProps)(BasketItem);
