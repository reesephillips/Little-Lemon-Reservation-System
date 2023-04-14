import React from 'react'
import RestaurantFood from '../components/assets/restauranfood.jpg';
import '../components/styles/HeroSection.css'
import { NavLink } from 'react-router-dom';

export default function HeroSections() {
  return (
    <div className='hero'>
      <section>
            <h1 className='primary-color'>Little Lemon</h1>
            <h2 className='white-text'>Chicago</h2>
            <p className='white-text'>
              We are a family owned mediterreanean restaurant, focused on traditional recipes served with a modren twist.

            </p>
            <NavLink to="/reservation"><button className='reserve'>Reserve a Table</button></NavLink>
      </section>
          <aside>
            <div className='image-div'>
              <img src={RestaurantFood} alt="food"/>
            </div>    
          </aside>
    </div>
  )
}
