import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../redux/modal/modal.actions";

import Spinner from "../layout/Spinner";

import {} from "./product-modal.styles.scss";

const ProductModal = ({
    id,
    modal: { showModal, details, loading },
    fetchProduct,
}) => {
    if (loading) return <Spinner />;

    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    modal: state.product,
});

export default connect(mapStateToProps, { fetchProduct })(ProductModal);
