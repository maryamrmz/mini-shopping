import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ProductModal from "../product-modal/product-modal.component";
import { fetchProduct } from "../../redux/modal/modal.actions";

import { Button, Modal } from "react-materialize";

import "./product-item.styles.scss";

const ProductItem = ({ id, imageUrl, name, price }) => {
    return (
        <Modal
            actions={[
                <Button flat modal='close' node='button' waves='light'>
                    بستن
                </Button>,
            ]}
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
            options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
            }}
            style={styleModal}
        >
            <ProductModal id={id} />
        </Modal>
    );
};

const styleModal = {
    width: "40rem",
    height: "70rem",
};

const mapDispatchToProps = (state) => ({
    showModal: state.product.showModal,
});

export default withRouter(
    connect(mapDispatchToProps, { fetchProduct })(ProductItem)
);
