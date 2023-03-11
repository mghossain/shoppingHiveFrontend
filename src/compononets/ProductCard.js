import React from 'react';

const ProductCard = (props) => {
    const img = require("../images/" + props.id + '.jpg')

    return (
        <div className='card p-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <img src={img}  alt={props.name}/>
            <p className='card-name'>
                {props.name}
            </p>
            <p className='card-price'>
                <strong>{props.price}$</strong>
            </p>
            <button onClick={(e) => props.handleClick(e, props.id, props.name)}
                className='mt-2 px-6 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800'>
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard;