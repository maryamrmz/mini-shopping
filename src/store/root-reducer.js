import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./products/reducer";
import productReducer from "./product/reducer";
import cartReducer from "./cart/reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const rootReducer = combineReducers({
    products: productsReducer,
    productItem: productReducer,
    cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
