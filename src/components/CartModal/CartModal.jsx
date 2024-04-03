import React, { useEffect, useState } from 'react';
import './CartModal.css';

function CartModal({ isOpen, onClose }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // localStorage dan ma'lumotni olish
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            setCartItems(savedCartItems);
        }
    }, []);

    return (
        <div>
            {isOpen && (
                <div className="overlay"></div>
            )}
            <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
                <div className="cart-content">
                    <span className="close-btn" onClick={onClose}>&times;</span>
                    <h2>Your Cart</h2>
                    {cartItems.length > 0 ? (
                        <div>
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index}>{item.name} - ${item.price}</li>
                                ))}
                            </ul>
                            <p>Total: $ {cartItems.reduce((total, item) => total + item.price, 0)}</p>
                        </div>
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartModal;
