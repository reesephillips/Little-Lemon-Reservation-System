import React from 'react'
import '../components/styles/Footer.css'
import Logo from '../components/assets/footerlogo.png'


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-items'>
        <img className='logo' src={Logo} alt='footer logo' />
        <ul>
            <h3>Doormat Navigation</h3>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <ul>
            <h3>Contact</h3>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
        </ul>
        <ul>
            <h3>Social Media</h3>
            <li>Twitter</li>
            <li>Instagram</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
