import React from "react";

import "./BasketItem.scss";

const BasketItem = ({ cartItem }) => {
    const { name, price, quantity } = cartItem;

    return (
        <div className='basket-item'>
            <span className='basket-item__name'>{name}</span>
            <span className='basket-item__price'>{price}</span>
            <span className='basket-item__quantity'>{quantity}</span>
        </div>
    );
};

export default BasketItem;
