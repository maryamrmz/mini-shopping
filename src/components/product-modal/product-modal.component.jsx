import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../redux/modal/modal.actions";

import Spinner from "../layout/Spinner";

const ProductModal = ({ id, modal: { showModal, details, loading } }) => {
    if (loading) return <Spinner />;

    return (
        <div style={modalStyle}>
            <p>{id}</p>
        </div>
    );
};

const modalStyle = {
    width: "75%",
    height: "75%",
};

const mapDispatchToProps = (state) => ({
    modal: state.product,
});

export default connect(mapDispatchToProps, { fetchProduct })(ProductModal);
