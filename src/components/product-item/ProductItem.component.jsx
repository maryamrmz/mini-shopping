import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProduct } from "../../store/product/product.actions";

import "./product-item.styles.scss";

const ProductItem = ({ id, fetchProduct, product }) => {
    const { imageUrl, name, price } = product;
    return (
        <div className='product-item' onClick={() => fetchProduct(id)}>
            <figure>
                <img className='image' src={imageUrl} alt={name} />
                <figcaption className='content'>
                    <span className='content__name'>{name.toUpperCase()}</span>
                    <span className='content__price'>{price}</span>
                </figcaption>
            </figure>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
});

export default withRouter(
    connect(null, mapDispatchToProps)(ProductItem)
);
