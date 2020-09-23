import React from "react";
import { connect } from "react-redux";

import { fetchProduct } from "../../redux/modal/modal.actions";
import { addItem } from "../../redux/cart/cart.actions";
import CustomeButton from "../custom-button/custom-button.component";

import "./product-modal.styles.scss";

const ProductModal = ({ name, price, product, material }) => {
    return (
        <div className='product-modal'>
            <figure>
                <figcaption className='content'>
                    <span className='content__name'>{name}</span>
                    <span className='content__price'>{price}</span>
                    <span className='content__product'>{product}</span>
                    <span className='content__product-material'>
                        {material}
                    </span>
                </figcaption>
            </figure>
            {/* <CustomeButton onClick={() => addItem(details)}>
                &#10005;
            </CustomeButton> */}
        </div>
    );
};

const mapStateToProps = (state) => ({
    modal: state.product,
});

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
