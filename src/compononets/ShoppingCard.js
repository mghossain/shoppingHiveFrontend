import React from 'react';
import ButtonRemoveFromCart from "./ButtonRemoveFromCart";

const ShoppingCard = (props) => {
    const img = require("../images/" + props.product_id + '.jpg')
    return (
        <div className='card p-2 border border-gray-200 rounded-lg shadow'>
            <img src={img}  alt={props.name}/>
            <p className='card-name'>
                {props["product"].name}
            </p>
            <p className='card-price'>
                <strong>{props["product"].price}$</strong>
            </p>
            <ButtonRemoveFromCart props={props} handleClick={props.handleClick}/>
        </div>
    );
};

export default ShoppingCard;