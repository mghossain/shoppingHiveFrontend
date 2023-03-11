import React, {useEffect, useState} from 'react';
import ProductCard from "../compononets/ProductCard";
import Snackbar from '@mui/material/Snackbar';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [errorMsg, setErrorMsg] = useState();
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    function handleCloseSnackbar() {
        setIsSnackbarOpen(false);
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/product')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.data.data);
            })
            .catch((err) => {
                setErrorMsg(err.message)
            });
    }, []);

    const handleAddToCart = (e, id, name) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/basket', {
            method: 'POST',
            body: JSON.stringify({
                product_id: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
            setIsSnackbarOpen(true);
            if (data.status === 'success')
                setSnackbarMessage(name+' Added to Shopping Cart!');
            else if (data.status === 'exists')
                setSnackbarMessage(name+' has already been Added!');
            })
            .catch((err) => {
                setIsSnackbarOpen(true);
                setSnackbarMessage('Error Adding item to Cart!');
            });
    };

    const cardData = products.map(card => {
        return <ProductCard handleClick={handleAddToCart}
            key={card.id}
            {...card}
        />
    })

    return (
        <section className="grid grid-cols-3 gap-3">
            {products.length ? cardData : errorMsg}
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
            />
        </section>
    );
};

export default Products;