import React, { useRef } from 'react' 
import { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import LoginSignup from '../../Pages/LoginSignup'
import { useActionData } from 'react-router-dom'
import dropdown from '../Assets/dropdown_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const[menu,setMenu]= useState ("Shop");
  const menuRef =useRef();

  const dropdown_toggle =(e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>CARS360</p>
              {/* Search Bar */}
      <div className="nav-search">
        <input type="text" placeholder="Search Cars eg. Honda elevate " />
        <button>Search</button>
      </div>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown} alt=""/>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{const newLocal = "shop"
setMenu(newLocal)}}><Link  style={{textDecoration: 'none' }} to ='/'>Shop</Link>
        {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none'}} to ='/mens'>NEW CAR</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to ='/womens'>USED CAR</Link>{menu==="women"?<hr/>:<></>}</li>
        {/* <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to ='/kids'>MAP</Link>{menu==="kids"?<hr/>:<></>}</li> */}
      </ul>






      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        : <Link to ='/login'><button>Login</button></Link>}
        <Link to ='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
