import React from 'react'
import '../components/styles/Navigation.css'
import Logo from "../components/assets/logo.jpg"
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <img src={ Logo } alt = 'logo'/>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li>About</li>
            <li>Menu</li>
            <li><NavLink to="/reservation">Reservations</NavLink></li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navigation;