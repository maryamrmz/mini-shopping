import React from "react";

import "./basket-item.styles.scss";

const BasketItem = ({ cartItem }) => {
    const { name, price, quantity } = cartItem;

    return (
        <div className='basket-item'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            <span className='quantity'>{quantity}</span>
        </div>
    );
};

export default BasketItem;
