import { ProductActionTypes } from "./types";

export const fetchProduct = (productId) => async (dispatch) => {
    const controller = new AbortController();
    const signal = controller.signal;

    try {
        setLoading();

        const res = await fetch(
            `https://5f65b41643662800168e6d76.mockapi.io/products/${productId}`,
            { signal }
        );
        const data = await res.json();

        dispatch({
            type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
            payload: data,
        });
        controller.abort();
    } catch (err) {
        dispatch({
            type: ProductActionTypes.FETCH_PRODUCT_ERROR,
            payload: err,
        });
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: ProductActionTypes.FETCH_PRODUCT_LOADING,
    };
};
