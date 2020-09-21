import React from "react";

import Products from "../../components/products/products.component";
import ProductModal from "../../components/product-modal/product-modal.component";

import "./homepage.styles.scss";

const HomePage = () => (
    <div className='homepage'>
        <Products />
        <ProductModal />
    </div>
);

export default HomePage;
