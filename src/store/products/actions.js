import { ProductsActionTypes } from "./types";

export const fetchProducts = () => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch(
            "https://5f65b41643662800168e6d76.mockapi.io/products"
        );
        const data = await res.json();

        dispatch({
            type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
            payload: err,
        });
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: ProductsActionTypes.FETCH_PRODUCTS_LOADING,
    };
};
