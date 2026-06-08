import React, { useReducer } from 'react';
import './Product.css';

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

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}

function getTotal(cart) {
    const total = cart.reduce((totalCost, item) => {
            return totalCost + item.price;
        }, 0);
    return total.toLocaleString(undefined, currencyOptions);
}

function cartReducer(state, action) {
    switch(action.type) {
        case 'add':
            return [...state, action.product];
        case 'remove':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            if(productIndex < 0) {
                return state;
            }

            const update = [...state];
            update.splice(productIndex, 1);
            return update;
        default:
            return state;
    }
}

// function totalReducer(state, action) {
//     if(action.type === 'add') {
//         return state + action.price;
//     }
//     return state - action.price
// }

export default function Product() {
    const [cart, setCart] = useReducer(cartReducer, []);
    // const [total, setTotal] = useReducer(totalReducer, 0);

    function add(product) {
        setCart({ product, type: 'add' });
    }

    function remove(product) {
        setCart({ product, type: 'remove' });
    }

    return (
        <div className="wrapper">
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: {getTotal(cart)}</div>

            <div>
                {products.map((product) => (
                    <div key={product.name}>
                        <div className="product">
                            <span role="img" aria-label="ice-cream">{product.emoji}</span>
                        </div>
                        <button onClick={() => add(product)}>Add</button>&nbsp;
                        <button onClick={() => remove(product)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}