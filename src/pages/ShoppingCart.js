import React, {useEffect, useState} from 'react';
import Snackbar from "@mui/material/Snackbar";
import ShoppingCard from "../compononets/ShoppingCard";
import ShoppingButtons from "../compononets/ShoppingButtons";

const ShoppingCart = () => {
    const [basket, setBasket] = useState([]);
    const [errorMsg, setErrorMsg] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    function handleCloseSnackbar() {
        setIsSnackbarOpen(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        fetch('http://127.0.0.1:8000/api/basket')
            .then((res) => res.json())
            .then((data) => {
                setBasket(data.data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setErrorMsg(err.message)
                setIsLoading(false);
            });
    };

    const handleRemove = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/basket', {
            method: 'DELETE',
            body: JSON.stringify({
                ids: cartIds,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setIsSnackbarOpen(true);
                if (data.status === 'success') {
                    setSnackbarMessage('Shopping Cart Emptied Successfully!');
                    fetchData()
                }
            })
            .catch((err) => {
                setIsSnackbarOpen(true);
                setSnackbarMessage('Error Emptying the Cart!');
            });
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/basket', {
            method: 'DELETE',
            body: JSON.stringify({
                ids: cartIds,
                stat_type: 'checkout'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setIsSnackbarOpen(true);
                if (data.status === 'success') {
                    setSnackbarMessage('Thank you for your Purchase!');
                    fetchData()
                }
            })
            .catch((err) => {
                setIsSnackbarOpen(true);
                setSnackbarMessage('Error Checking Out!');
            });
    };

    const totalPrice = basket.reduce(
        (total, product) => total + product['product'].price, 0
    );

    const cartIds = basket.map((product) => product.id);


    const cardData = basket.map(card => {
        return <ShoppingCard
                key={card.id}
                {...card}
        />
    })

    return (
        <div>
            {
                isLoading ? (<p>Loading Shopping Cart ...</p>) :
                (basket.length ? (
                    <section className="grid grid-cols-3 gap-3 mb-2">
                        {cardData}
                    </section>
                ): "Add Some Products to Start Shopping" )
            }

            {(!isLoading && basket.length) ?
                <ShoppingButtons
                                totalPrice={totalPrice}
                                handleRemove={handleRemove}
                                handleCheckout={handleCheckout}/> : ''}

            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
            />
        </div>
    );
};

export default ShoppingCart;