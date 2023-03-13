import React from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <header>
            <nav className='nav border-b border-gray-300 shadow'>
                <img className='w-40 ml-2' src={logo} />
                <h1 className='mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xln lg:text-6xl dark:text-white'>
                    Shopping <span className="text-orange-600 dark:text-orange-500">Hive</span>
                </h1>
                <div></div>

            </nav>
        </header>
    );
};

export default Navbar;