import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.cardContent.imgSrc} alt=''/>
        <h3>{props.cardContent.name}</h3>
        <p>Ph:{props.cardContent.phone}</p>
        <p>Email:{props.cardContent.email}</p>
      
    </div>
  )
}

export default Card
