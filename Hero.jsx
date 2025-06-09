import React from 'react'
import './Hero.css'
import mothers_day from '../Assets/mothers.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals!</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Mothers Day</p>
                </div>
                <div className='text'>
                    <p>Celebrations</p>
                    <p>at Braeside!</p>
                </div>
                <div className="btn">
                    <button >Shop Now</button>
                </div>
            </div>
        </div>
        <div className="hero-right">
            <img src={mothers_day} alt="" />
        </div>
    </div>
  )
}

export default Hero