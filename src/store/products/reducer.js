import { ProductsActionTypes } from "./types";

const INITIAL_STATE = {
    products: [],
    loading: false,
    error: null,
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case ProductsActionTypes.FETCH_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default productsReducer;
