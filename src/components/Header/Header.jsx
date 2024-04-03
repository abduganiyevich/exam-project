import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';
import CartModal from '../CartModal/CartModal.jsx'; 

function Header() {
    const [isCartOpen, setCartOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);


    const handleCartClick = () => {
        setCartOpen(true);
    };

    const handleCloseModal = () => {
        setCartOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div>
            <header className={isFixed ? 'fixed-header' : ''}>
                <div className="container">
                    <div className="header-logo">
                        <Link to={'/'}>
                            <img src="/logo.svg" alt="" />
                        </Link>
                    </div>

                    <div className="header-nav">
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/headphones'}>Headphones</Link></li>
                            <li><Link to={'/speakers'}>Speakers</Link></li>
                            <li><Link to={'/earphones'}>Earphones</Link></li>
                        </ul>
                    </div>
                    <div className="header-cart">
                        <button onClick={handleCartClick}>
                            <img src="/cart.svg" alt="" />
                        </button>
                    </div>
                </div>
            </header>
            <CartModal isOpen={isCartOpen} onClose={handleCloseModal} /> 
        </div>
    );
}

export default Header;
