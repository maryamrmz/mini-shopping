import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BasketItem from "../../components/BasketItem";
import { selectCartItems } from "../../store/cart/selectors";
import { clearItemsFromCart, submitCartList } from "../../store/cart/actions";
import CustomButton from "../../components/CustomButton";

import "./Basket.scss";

const BasketPage = ({ cartItems, clearItems, submitItems }) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        submitItems(cartItems);
        clearItems(cartItems);
    };

    return (
        <form className='basket-page' onSubmit={handleSubmit}>
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
                <CustomButton type='submit'>نهایی کردن سبد</CustomButton>
            )}
        </form>
    );

};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
    clearItems: (item) => dispatch(clearItemsFromCart(item)),
    submitItems: () => dispatch(submitCartList())
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
