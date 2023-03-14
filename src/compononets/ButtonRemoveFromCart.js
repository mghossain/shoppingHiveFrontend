import React from 'react';

const ButtonRemoveFromCart = (props) => {
    return (
        <button onClick={(e) => props.handleClick(e, props.props.id, props.props["product"].name, props.props.product_id)}
                className='mt-2 px-6 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800'>
            Remove from Cart
        </button>
    );
};

export default ButtonRemoveFromCart;