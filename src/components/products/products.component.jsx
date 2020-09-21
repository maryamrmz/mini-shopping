import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/products/products.actions";

import Spinner from "../layout/Spinner";
import ProductItem from "../product-item/product-item.component";

import "./products.styles.scss";

const Products = ({ product: { products, loading }, fetchProducts }) => {
    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, []);

    if (loading) return <Spinner />;

    return (
        <div className='products'>
            {products.map(({ id, ...otherProps }) => (
                <ProductItem
                    id={id}
                    key={id}
                    imageUrl={`https://loremflickr.com/320/240?random=${id}`}
                    {...otherProps}
                />
            ))}
        </div>
    );
};

const mapDispatchToProps = (state) => ({
    product: state.products,
});

export default connect(mapDispatchToProps, { fetchProducts })(Products);
