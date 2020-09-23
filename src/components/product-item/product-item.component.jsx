import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProduct } from "../../redux/modal/modal.actions";

import "./product-item.styles.scss";

const ProductItem = ({ id, fetchProduct, product }) => {
    const { imageUrl, name, price } = product;
    return (
        <div className='product-item' onClick={() => fetchProduct(id)}>
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

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ProductItem)
);
