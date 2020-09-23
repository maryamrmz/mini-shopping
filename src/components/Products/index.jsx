import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-materialize";

import { fetchProducts } from "../../store/products/actions";
import ProductModal from "../ProductModal";
import ProductItem from "../ProductItem";
import Spinner from "../Spinner";

import "./Products.scss";

const Products = ({
    products: { products, loading },
    fetchProducts,
    productItem: { details },
}) => {
    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, []);

    if (loading) return <Spinner />;

    return (
        <Modal
            actions={[
                <Button flat modal='close' node='button' waves='light'>
                    بستن
                </Button>,
            ]}
            trigger={
                <div className='products'>
                    {products.map((product) => (
                        <ProductItem
                            id={product.id}
                            key={product.id}
                            imageUrl={`https://loremflickr.com/320/240?random=${product.id}`}
                            product={product}
                        />
                    ))}
                </div>
            }
            bottomSheet={false}
            fixedFooter={false}
            open={false}
            options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
            }}
        >
            {details && <ProductModal />}
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
    productItem: state.productItem,
});

export default connect(mapStateToProps, { fetchProducts })(Products);
