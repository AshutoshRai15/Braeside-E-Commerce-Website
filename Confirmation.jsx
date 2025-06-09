import React, { useContext } from 'react';
import './Confirmation.css';
import logo from '../Assets/logo.png';
import { ShopContext } from '../../Context/ShopContext';

const Confirmation = () => {
    const { getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className="confirmation-container">
            <div className="website-logo">
                <img src={logo} alt="Braeside Smart Mart Logo" />
            </div>
            <hr />
            <div className="user_message">
                <h3>Hey there,</h3>
                <p>Thank you for shopping with Braeside Smart Mart today. A total of <span className="bold-price">${getTotalCartAmount()}</span> has been changed to your school account, and you will receive an email from us shortly notifying you when your order is ready to pick up in store.</p>
            </div>
            <div className="order-number">
                <p>Order Number: <span>#1273658</span></p>
            </div>
        </div>
    );
}

export default Confirmation;