import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {img, name, seller, price, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='info'>
                <h4 className='name-info'>{name}</h4>
                <p>Price ${price}</p>
                <p><small>{seller}</small></p>
                <p><small>Rating {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add To Cart <i class="fa-solid fa-cart-plus"></i></p>
            </button>
        </div>
    );
};

export default Product;