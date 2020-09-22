import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ProductModal from "../product-modal/product-modal.component";
import { fetchProduct } from "../../redux/modal/modal.actions";

import { Modal } from "react-materialize";

import "./product-item.styles.scss";

const ProductItem = ({ id, imageUrl, name, price }) => {
    return (
        <Modal
            trigger={
                <div className='product-item' href={id}>
                    <figure>
                        <img className='image' src={imageUrl} alt={name} />
                        <figcaption className='content'>
                            <span className='name'>{name.toUpperCase()}</span>
                            <span className='price'>{price.toUpperCase()}</span>
                        </figcaption>
                    </figure>
                </div>
            }
            bottomSheet={false}
            fixedFooter={false}
            id={id}
            open={false}
        >
            <ProductModal id={id} />
        </Modal>
    );
};

const mapDispatchToProps = (state) => ({
    showModal: state.product.showModal,
});

export default withRouter(
    connect(mapDispatchToProps, { fetchProduct })(ProductItem)
);
