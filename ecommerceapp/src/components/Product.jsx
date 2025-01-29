import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const { id, price, image, title, description } = product;

    const navigate = useNavigate();


    return (
        <div className='card' >
            <img src={image} alt="" />
            <div>
                <p>{title}</p>
                <h3>{price}$  </h3>
            </div>

            <div>
                <button onClick={(() => navigate("/product-details/" + id))} >Product Details</button>
            </div>

        </div>
    )
}

export default Product
