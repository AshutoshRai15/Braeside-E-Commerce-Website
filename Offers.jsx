import React from 'react';
import './Offers.css';
import tks from '../Assets/tks.png';

const Offers = () => {
  return (
    <div className ='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY AT BRAESIDE SMART MART</p>
        </div>
        <div className="offers-right">
            <img src={tks} alt="" />
        </div>
    </div>
  )
}

export default Offers