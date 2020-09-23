import CartActionTypes from "./types";
import { addItemToCart } from "./utils";

const INITIAL_STATE = {
    cartItems: [],
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
        default:
            return state;
    }
};

export default cartReducer;
