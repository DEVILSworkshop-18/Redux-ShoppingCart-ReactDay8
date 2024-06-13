import React from 'react';
import Cards from './Cards';

const Cart = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='yourCart'>Your Cart</h1>
            </div>
            <Cards />
        </div>
    );
};

export default Cart;