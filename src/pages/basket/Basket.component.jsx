import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BasketItem from "../../components/basket-item/BasketItem.component";
import { selectCartItems } from "../../store/cart/cart.selectors";

import "./basket.styles.scss";

const BasketPage = ({ cartItems }) => {
    return (
        <form className='basket-page'>
            <div className='basket-page__header'>
                <span className='basket-page__header-block'>اسم</span>
                <span className='basket-page__header-block'>قیمت</span>
            </div>
            {cartItems.map((cartItem) => (
                <BasketItem key={cartItem.id} cartItem={cartItem} />
            ))}
        </form>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(BasketPage);
