import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProduct } from "../../store/product/actions";

import "./ProductItem.scss";

const ProductItem = ({ id, fetchProduct, product, imageUrl }) => {
    const { name, price } = product;
    return (
        <div className='product-item' onClick={() => fetchProduct(id)}>
            <figure>
                <img className='image' src={imageUrl} alt={name} />
                <figcaption className='content'>
                    <span className='content__name'>{name}</span>
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
