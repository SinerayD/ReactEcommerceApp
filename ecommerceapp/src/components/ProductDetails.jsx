import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/ProductSlice';
import '../css/ProductDetails.css'
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { addToBasket, basketTotalAmount } from '../redux/slices/basketSlice';

const ProductDetails = () => {

    const { id } = useParams();
    const { product, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct;

    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const increment = () => {
        setCount((prev) => prev + 1);
    }

    const decrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload));
        dispatch(basketTotalAmount());
    }


    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        product && product.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }

    return (
        <div className="product-details">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <h2>{title}</h2>
                <p className="product-description">{description}</p>
                <h1 className="product-price">${price}</h1>
                <div className="product-quantity">
                    <CiCirclePlus onClick={increment} />
                    <span>{count}</span>
                    <CiCircleMinus onClick={decrement} />
                </div>
                <button onClick={addBasket} className="buy-now">Add To Basket</button>
            </div>
        </div>
    )
}

export default ProductDetails