import React, {useEffect, useState} from 'react';
import Snackbar from "@mui/material/Snackbar";
import ShoppingCard from "../compononets/ShoppingCard";

const ShoppingCart = () => {
    const [basket, setBasket] = useState([]);
    const [errorMsg, setErrorMsg] = useState();
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    function handleCloseSnackbar() {
        setIsSnackbarOpen(false);
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/basket')
            .then((res) => res.json())
            .then((data) => {
                setBasket(data.data.data);
            })
            .catch((err) => {
                setErrorMsg(err.message)
            });
    }, []);


    const cardData = basket.map(card => {
        return <ShoppingCard
                key={card.id}
                {...card}
        />
    })

    return (
        <section className="grid grid-cols-3 gap-3">
            {basket.length ? cardData : errorMsg}
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
            />
        </section>
    );
};

export default ShoppingCart;