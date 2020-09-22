import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/products/products.actions";
import ProductModal from "../product-modal/product-modal.component";
import ProductItem from "../product-item/product-item.component";

import Spinner from "../layout/Spinner";

import { Button, Modal } from "react-materialize";

import "./products.styles.scss";

const Products = ({ product: { products, loading }, fetchProducts }) => {
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
                    {products.map((item) => (
                        <ProductItem
                            key={item.id}
                            imageUrl={`https://loremflickr.com/320/240?random=${item.id}`}
                            item={item}
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
            {products.map((item) => (
                <ProductModal id={item.id} />
            ))}
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    product: state.products,
});

export default connect(mapStateToProps, { fetchProducts })(Products);
