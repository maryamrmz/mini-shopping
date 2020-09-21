import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { clearItemsFromCart } from "../../redux/cart/cart.actions";

import BasketItem from "../../components/basket-item/basket-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./basket.styles.scss";

const BasketPage = ({ clearItems, cartItems }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        clearItems(cartItems);
    };

    return (
        <form className='basket-page'>
            <div className='basket-header'>
                <div className='header-block'>
                    <span>اسم</span>
                </div>
                <div className='header-block'>
                    <span>قیمت</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <BasketItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <CustomButton type='submit' onClick={handleSubmit}>
                نهایی کردن سبد
            </CustomButton>
        </form>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
    clearItems: (item) => dispatch(clearItemsFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
