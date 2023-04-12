import React from 'react'
import '../components/styles/Navigation.css'
import Logo from "../components/assets/logo.jpg"

function Navigation() {
  return (
    <nav>
      <img src={ Logo } alt = 'logo'/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navigation;