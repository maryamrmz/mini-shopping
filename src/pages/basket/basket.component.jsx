import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BasketItem from "../../components/basket-item/basket-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import {
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./basket.styles.scss";

const BasketPage = ({ cartItems }) => (
    <div className='basket-page'>
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
        <CustomButton type='submit'>نهایی کردن سبد</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(BasketPage);
