import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ProductModal from "../product-modal/product-modal.component";
import { fetchProduct } from "../../redux/modal/modal.actions";

import Modal from "react-modal";

import "./product-item.styles.scss";

const ProductItem = ({ id, showModal, imageUrl, name, price }) => {
    const openModal = () => () => {
        fetchProduct(id);
    };
    const closeModal = () => {
        this.props.showModal = null;
    };

    return (
        <div className='product-item' onClick={() => openModal(id)}>
            <figure>
                <img className='image' src={imageUrl} alt={name} />
                <figcaption className='content'>
                    <span className='name'>{name.toUpperCase()}</span>
                    <span className='price'>{price.toUpperCase()}</span>
                </figcaption>
            </figure>
            {showModal && (
                <Modal isOpen={true} onRequestClose={closeModal}>
                    <ProductModal />
                </Modal>
            )}
        </div>
    );
};

const mapDispatchToProps = (state) => ({
    showModal: state.product.showModal,
});

export default withRouter(
    connect(mapDispatchToProps, { fetchProduct })(ProductItem)
);
