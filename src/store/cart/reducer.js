import CartActionTypes from "./types";
import { addItemToCart } from "./utils";

const INITIAL_STATE = {
    cartItems: [],
    loading: false,
    error: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };

        case CartActionTypes.CLEAR_ITEMS:
            return {
                ...state,
                cartItems: [],
            };
        case CartActionTypes.SUBMIT_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case CartActionTypes.SUBMIT_ITEMS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CartActionTypes.SUBMIT_ITEMS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
