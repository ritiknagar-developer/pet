import React from 'react'
import './Footer.css';
// import logo from '../Assets/PetzzyWeb-bg.png';
import logo from '../Assets/9.png';
import insta from '../Assets/insta.png';
import fb from '../Assets/fb.png';
import xt from '../Assets/xt.png';
import gmail from '../Assets/gmail.png';

function Footer(){
  return (
    <div className='footer-container'>
       <div className='subscribe-container'>
          <div className='footer-logo-container'>
           <div className='footer-logo'>
              <img src={logo} alt='logo' height='100%'/>
            </div> 
            {/* <p className='footer-logo-text'>PetzzyWeb</p> */}
          </div>
          <div className='subscribe'> 
            <p>Subscribe to our news letter to get updates</p>

              <div className='channel'>
             
          <input type="search" name="q" placeholder="Search here"/>
        
              </div>
              <button className='subscribe-btn'>Subscribe</button>
          </div>
       </div>
       <div className='same-container'>
            <h3 className='footer-heading'>Information</h3>
            <a href='/about-us' className='footer-text'>About us</a>
            <a href='/blog' className='footer-text'>Blog</a>
            <a href='#' className='footer-text'>Events</a>
            <a href='#' className='footer-text'>Testimonials</a>
       </div>
       <div className='same-container'>
       <h3 className='footer-heading'>Helpful Links</h3>
            <a href='/services' className='footer-text'>Services</a>
            <a href='/contact-us' className='footer-text'>Support</a>
            <a href='#' className='footer-text'>Terms & Conditions</a>
            <a href='#' className='footer-text'>Privacy Policy</a>
       </div>
       <div className='same-container'>
       <h3 className='footer-heading'>Our Services</h3>
            <a href='/services' className='footer-text'>Buy & Sell</a>
            <a href='/services2' className='footer-text'>Shop</a>
            <a href='/services3' className='footer-text'>Consult a vet</a>
            <p></p>
       </div>
       <div className='contact-us'>
       <h3 className='footer-heading'>Contact us</h3>
            <p className='footer-text'><i class="fa-solid fa-phone-volume"></i> +91 9999999999</p>
            <p className='footer-text'><i class="fa-solid fa-envelope"></i> mailid.com</p>
            <div className='social-media-icons'>
              <a href='#'>
              <div className='smi'>
                <img src={insta} height='100%' alt='icon1'/>
              </div>
              </a>
              <a href='#'>
              <div className='smi'>
                <img src={fb} height='100%' alt='icon2'/>
              </div>
              </a>
              <a href='#'>
              <div className='smi'>
                <img src={xt} height='100%' alt='icon3'/>
              </div>
              </a>
              <a href='#'>
              <div className='smi'>
                <img src={gmail} height='100%' alt='icon4'/>
              </div>
              </a>
            </div>
           
       </div>
    </div>
  )
}

export default Footer;