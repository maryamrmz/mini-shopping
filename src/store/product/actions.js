import { ProductActionTypes } from "./types";

let latestController;

export const fetchProduct = (productId) => async (dispatch) => {
    if (latestController) {
        latestController.abort();
    }
    latestController = new AbortController();
    const { signal } = latestController;

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
    } catch (err) {
        dispatch({
            type: ProductActionTypes.FETCH_PRODUCT_ERROR,
            payload: err,
        });
    }
};

export const removeProductItem = () => {
    return {
        type: ProductActionTypes.REMOVE_PRODUCT,
    };
};

// Set loading to true
export const setLoading = () => {
    return {
        type: ProductActionTypes.FETCH_PRODUCT_LOADING,
    };
};
