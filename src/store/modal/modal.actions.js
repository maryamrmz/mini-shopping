import { ProductActionTypes } from "./modal.types";

export const fetchProduct = (productId) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch(
            `https://5f65b41643662800168e6d76.mockapi.io/products/${productId}`
        );
        const data = await res.json();

        dispatch({
            type: ProductActionTypes.FETCH_PRODUCT,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: ProductActionTypes.FETCH_ERROR,
            payload: err,
        });
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: ProductActionTypes.SET_LOADING,
    };
};
