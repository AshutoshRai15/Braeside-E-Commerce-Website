import React, { useContext, useState } from 'react';
import './Navbar.css';


import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

        const [menu,setMenu] = useState("shop");
        const {getTotalCartItems}= useContext(ShopContext)

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Braeside Smart Mart</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("accessories")}}><Link style={{ textDecoration: 'none' }} to='/accessories'>Accessories</Link>{menu==="accessories"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("stationery")}}><Link style={{ textDecoration: 'none' }} to='/stationery'>Stationery</Link>{menu==="stationery"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("uniform")}}><Link style={{ textDecoration: 'none' }} to='/uniform'>Uniform</Link>{menu==="uniform"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("cadet corps")}}><Link style={{ textDecoration: 'none' }} to='/cadet corps'>Cadet Corps</Link>{menu==="cadet corps"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("gifts")}}><Link style={{ textDecoration: 'none' }} to='/gifts'>Gifts</Link>{menu==="gifts"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-logo-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/login'><button>Login</button></Link>}
                <Link to='/cart'><img src={cart} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar