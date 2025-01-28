import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/ProductSlice';
import Product from '../components/Product';
import '../css/Product.css';

const ProductList = () => {
    const dispatch = useDispatch();
    const { product } = useSelector((store) => store.product);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div className="product-list">
            {product &&
                product.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
        </div>
    );
};

export default ProductList;