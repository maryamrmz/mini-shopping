import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../redux/modal/modal.actions";

import Spinner from "../layout/Spinner";

const ProductModal = ({ modal: { showModal, details, loading } }) => {
    if (loading) return <Spinner />;

    return (
        <div className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Modal Header</h4>
                <p>{showModal}</p>
            </div>
            <div className='modal-footer'>
                <a
                    href='#!'
                    className='modal-close waves-effect waves-green btn-flat'
                >
                    Agree
                </a>
            </div>
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
