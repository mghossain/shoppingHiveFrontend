import React, {useEffect, useState} from 'react';
import axios from 'axios'
import ProductCard from "../ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [errorMsg, setErrorMsg] = useState();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/product')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data.data);
                setProducts(data.data.data);
            })
            .catch((err) => {
                console.log(err.message);
                setErrorMsg(err.message)
            });
    }, []);

    const cardData = products.map(card => {
        return <ProductCard
            key={card.id}
            {...card}
        />
    })

    return (
        <section className="cards-list">
            {products.length ? cardData : errorMsg}
        </section>
    );
};

export default Products;