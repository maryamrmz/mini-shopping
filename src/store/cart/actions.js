import CartActionTypes from "./types";

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});

export const clearItemsFromCart = (item) => ({
    type: CartActionTypes.CLEAR_ITEMS,
    payload: item,
});
