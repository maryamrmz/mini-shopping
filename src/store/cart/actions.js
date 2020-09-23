import CartActionTypes from "./types";

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});

export const clearItemsFromCart = (item) => ({
    type: CartActionTypes.CLEAR_ITEMS,
    payload: item,
});

export const submitCartList = (cartItems) => async (dispatch) => {
    const settings = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: cartItems,
    };
    try {
        const fetchResponse = await fetch(
            "https://5f65b41643662800168e6d76.mockapi.io/basket",
            settings
        );
        const data = await fetchResponse.json();

        console.log(data);
        dispatch({
            type: CartActionTypes.SUBMIT_ITEMS_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: CartActionTypes.SUBMIT_ITEMS_ERROR,
            payload: err,
        });
    }
};
