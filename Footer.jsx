import React from 'react'
import './Footer.css';
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram.png'
import facebook_icon from '../Assets/facebook.png'
import linkedin_icon from '../Assets/linkedin.png'
import twitter_icon from '../Assets/twitter.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Braeside Smart Mart</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={facebook_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={linkedin_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer