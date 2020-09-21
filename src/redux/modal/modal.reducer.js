import { ProductActionTypes } from "./modal.types";

const INITIAL_STATE = {
    details: null,
    showModal: null,
    loading: false,
    error: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCT:
            return {
                ...state,
                details: action.payload,
                loading: false,
            };
        case ProductActionTypes.SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ProductActionTypes.FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
