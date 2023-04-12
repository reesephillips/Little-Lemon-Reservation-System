import React from 'react'
import '../components/styles/Specials.css'
import SpecialsCards from './SpecialsCards'

export default function Specials() {
  return (
    <div className='specials-container'>
        <div className='header'>
            <h1 className='this-week'>This weeks specials!</h1>
            <button className='online-menu-btn'>Online Menu</button>
        </div>
        <div className='special-cards'>
            <SpecialsCards />
        </div>
    </div>
  )
}
