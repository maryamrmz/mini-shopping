import { ProductActionTypes } from "./types";

const INITIAL_STATE = {
    details: null,
    loading: false,
    error: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                details: action.payload,
                loading: false,
            };
        case ProductActionTypes.FETCH_PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ProductActionTypes.FETCH_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
