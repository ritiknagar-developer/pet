import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/7.png'

function Header() {
   return (
      <>
         <div className='navbar'>
            <div className='frame-12'>
               <img src={logo} alt='logo' height='100%' />
              
            </div>
            <div className='navigation-bar'>
               <NavLink to="/about-us" className='menu-name'>About us</NavLink>
               <NavLink to="/services" className='menu-name'>Services</NavLink>
               <NavLink to="/blog" className='menu-name'>Blog</NavLink>
               <NavLink to="/contact-us" className='menu-name'>Contact us</NavLink>

            </div>

         </div>
         <div className='frame-28'>
            <div className='frame-5'>
               <div className='frame-3'>
                  <NavLink to='/services' className='h-text'>SELL</NavLink>
                  <NavLink to='/services' className='h-text'>BUY</NavLink>
                  <NavLink to='/services2' className='h-text'>SHOP</NavLink>
                  <NavLink to='/services3' className='h-text'>CONSULT A VET</NavLink>
               </div>
            </div>
         </div>
         
      </>
   )
}

export default Header;