import CartActionTypes from "./types";
import { addItemToCart } from "./utils";
import { SubmitCartList } from "./actions";

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
        case CartActionTypes.SUBMIT_ITEMS:
            return {
                ...state,
                cartItems: SubmitCartList(state.cartItems),
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
