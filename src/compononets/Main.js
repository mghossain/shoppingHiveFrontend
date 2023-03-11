import React from 'react';
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route, }
    from 'react-router-dom';
import ProductCard from "../ProductCard";



const Main = () => {
    return (
        <section className='py-16 px-6 max-w-4xl mx-auto'>
            <h1 className='font-bold text-lg mb-8 pb-2 border-b'>Shop All Products</h1>
            <div className='flex'>
                <Router>
                    <Sidebar />
                    <main className='flex-1'>
                        <div className='border border-gray-200 p-6 rounded-xl'>
                            <Routes>
                                <Route path='/products' element={<ProductCard />} />
                                <Route path='/cart' element={<ProductCard />} />
                                <Route path='/sales' element={<ProductCard />} />
                                {/*<Route path='/products' element={<Products />} />*/}
                                {/*<Route path='/cart' element={<Cart />} />*/}
                                {/*<Route path='/sales' element={<Sales />} />*/}
                            </Routes>
                        </div>
                    </main>
                </Router>
            </div>
        </section>
    );
};

export default Main;