import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./product-item.styles.scss";

const ProductItem = ({ item }) => {
    const { imageUrl, name, price } = item;
    return (
        <div className='product-item'>
            <figure>
                <img className='image' src={imageUrl} alt={name} />
                <figcaption className='content'>
                    <span className='name'>{name.toUpperCase()}</span>
                    <span className='price'>{price}</span>
                </figcaption>
            </figure>
        </div>
    );
};

const mapStateToProps = (state) => ({
    showModal: state.product.showModal,
});

export default withRouter(connect(mapStateToProps)(ProductItem));
