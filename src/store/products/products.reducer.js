import { ProductsActionTypes } from "./products.types";

const INITIAL_STATE = {
    products: [],
    loading: false,
    error: null,
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductsActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case ProductsActionTypes.SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ProductsActionTypes.FETCH_ERROR:
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
