import React from 'react'
import '../css/Product.css'

const Product = ({ product }) => {
    const { id, price, image, title, description } = product;

    console.log(product.price);

    return (
        <div className='card' >
            <img src={image} alt="" />
            <div>
                <p>{title}</p>
                <h3>{price}</h3>
            </div>

            <div>
                <button>Product Details</button>
            </div>
        </div>
    )
}

export default Product
