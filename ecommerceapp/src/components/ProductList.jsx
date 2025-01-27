import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/ProductSlice';

const ProductList = () => {

    const dispatch = useDispatch();
    const { product } = useSelector((store) => store.product);
    console.log(product);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div>
            {
                products && product.map((product) => (
                    
                ))
            }
        </div>
    )
}

export default ProductList
