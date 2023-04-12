import React from 'react'
import salad from '../components/assets/greek salad.jpg'
import lemon from '../components/assets/lemon dessert.jpg'
import bruchetta from '../components/assets/bruchetta.svg'
import '../components/styles/SpecialCards.css'
import { MdDeliveryDining } from "react-icons/md"

export default function SpecialsCards() {

    const specialMenu = [
        {
            image: salad,
            title: "Greek Salad",
            price: "$ 12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
            order: "Order a delivery"
        } ,
        {
            image: bruchetta,
            title: "Bruchetta",
            price: "$ 5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
            order: "Order a delivery"
        } ,
        {
            image: lemon,
            title: "Lemon Dessert",
            price: "$ 5.00",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. ",
            order: "Order a delivery"
        }
    ]

    const specialCards = specialMenu.map(item => {

        const image = item.image
        const title = item.title
        const price = item.price
        const description = item.description
        const order = item.order

            return (
                <div>
                    <div className='special-card-container'>
                        <div className='img-container'>
                            <img src = { image } alt='special' />
                        </div>
                        <div className='special-card-text'>
                            <div className='special-title'>
                                <h2 className='item-name'>{ title }</h2>
                                <p className='price'>{ price }</p>
                            </div>
                            <p className='description'>{ description }</p>
                            <div className='order-deliver'>
                                <p>{ order }</p>
                                { <MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px",}} /> }
                            </div>
                        </div>
                    </div>
                </div>
            )

    } )

    return (
        <div>
            <div className='special-card'>
                {specialCards}
            </div>
        </div>
    )
}
