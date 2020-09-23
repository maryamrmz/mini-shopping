import React from "react";
import { connect } from "react-redux";

import { fetchProduct } from "../../store/product/product.actions";
import { addItem } from "../../store/cart/cart.actions";
import CustomButton from "../custom-button/CustomButton.component";
import Spinner from "../spinner/Spinner";

import "./product-modal.styles.scss";

const ProductModal = ({ productItem: { details, loading }, addItem }) => {
    const { name, price, product } = details;

    if (loading) return <Spinner />;

    return (
        <div className='product-modal'>
            <div className='product-modal__header'>
                <span className='basket-page__header-block'>اسم</span>
                <span className='basket-page__header-block'>قیمت</span>
                <span className='basket-page__header-block'>محصول</span>
            </div>
            <div className='content'>
                <span className='content__name'>{name}</span>
                <span className='content__price'>{price}</span>
                <span className='content__product'>{product}</span>
            </div>
            <CustomButton onClick={() => addItem(details)}>
                افزودن به سبد خرید
            </CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    productItem: state.productItem,
});

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    addItem: (details) => dispatch(addItem(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
