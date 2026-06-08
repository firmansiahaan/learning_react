import React, { useState } from 'react';
import './Product.css';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        price: 2.5,
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 4
    }
];

export default function Product() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function add(product) {
        setCart(current => [...cart, product.name]);
        setTotal(current => current + product.price);
    }

    function getTotal(total) {
        return total.toLocaleString(undefined, currencyOptions)
    }

    return(
        <div className="wrapper">
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: {getTotal(total)}</div>

            <div>
                {products.map(product => (
                    <div key={product.name}>
                        <div className="product">
                            <span role="img" aria-label="ice cream">{product.emoji}</span>
                        </div>
                        <button onClick={() => add(product)}>Add</button>&nbsp;
                        <button onClick={() => {
                            setCart([]);
                            setTotal(0);
                        }}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}