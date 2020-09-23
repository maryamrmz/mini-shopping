import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BasketItem from "../../components/basket-item/BasketItem.component";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { clearItemsFromCart } from "../../store/cart/cart.actions";
import CustomButton from "../../components/custom-button/CustomButton.component";

import "./basket.styles.scss";

const BasketPage = ({ cartItems, clearItems }) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        clearItems(cartItems);
    };

    return (
        <form className='basket-page'>
            <div className='basket-page__header'>
                <span className='basket-page__header-block'>اسم</span>
                <span className='basket-page__header-block'>قیمت</span>
                <span className='basket-page__header-block'>تعداد</span>
            </div>
            {cartItems.map((cartItem) => (
                <BasketItem key={cartItem.id} cartItem={cartItem} />
            ))}
            {/* eslint-disable-next-line */}
            {cartItems != "" && (
                <CustomButton type='submit' onClick={handleSubmit}>
                    نهایی کردن سبد
                </CustomButton>
            )}
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
