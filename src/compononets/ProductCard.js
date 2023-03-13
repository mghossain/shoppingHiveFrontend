import React from 'react';
import ButtonAddToCart from "./ButtonAddToCart";

const ProductCard = (props) => {
    const img = require("../images/" + props.id + '.jpg')
    return (
        <div className='card p-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <img src={img}  alt={props.name}/>
            <p className='card-name'>
                {props.name}
            </p>
            <p>
                <strong>{props.price}$</strong>
            </p>
            <ButtonAddToCart props={props} handleClick={props.handleClick}/>
        </div>
    )
}

export default ProductCard;