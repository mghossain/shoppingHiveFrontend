import React from 'react';
import { BrowserRouter as Router, Routes, Route, }
    from 'react-router-dom';
import Sidebar from "./Sidebar";
import Products from "../pages/Products";
import ShoppingCart from "../pages/ShoppingCart";
import SalesStat from "../pages/SalesStat";
import Assignment from "../pages/Assignment";

const Main = () => {
    return (
        <section className='py-16 px-2 mb-6 max-w-5xl mx-auto'>
            <h1 className='font-bold text-lg mb-8 pb-2 border-b'>Shop All Products</h1>
            <div className='flex'>
                <Router>
                    <Sidebar />
                    <main className='flex-1'>
                        <div className='border border-gray-200 px-6 rounded-xl'>
                            <Routes>
                                <Route path='/' element={<Products />} />
                                <Route path='/cart' element={<ShoppingCart />} />
                                <Route path='/sales' element={<SalesStat />} />
                                <Route path='/assignment' element={<Assignment />} />
                            </Routes>
                        </div>
                    </main>
                </Router>
            </div>
        </section>
    );
};

export default Main;