import React from 'react';
import check from '../images/check.png';
import remove from '../images/remove.png';

const ShoppingButtons = (props) => {
    return (
        <div className="text-right rounded-md shadow-sm py-6" role="group">
            <button type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-red-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                <img className="w-4 h-4 mr-2 fill-current" src={remove} />
                Remove
            </button>
            <button type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-orange-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                <img className="w-5 h-4 mr-2 fill-current" src={check} />
                CheckOut <span className="ml-1 font-bold">${props.totalPrice}</span>
            </button>
        </div>
    );
};

export default ShoppingButtons;