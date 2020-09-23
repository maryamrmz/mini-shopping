import { ProductsActionTypes } from "./products.types";

export const fetchProducts = () => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch(
            "https://5f65b41643662800168e6d76.mockapi.io/products"
        );
        const data = await res.json();

        dispatch({
            type: ProductsActionTypes.FETCH_PRODUCTS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: ProductsActionTypes.FETCH_ERROR,
            payload: err,
        });
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: ProductsActionTypes.SET_LOADING,
    };
};
