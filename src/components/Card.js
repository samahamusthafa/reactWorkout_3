import React, { useState } from 'react';
import heart from "../assets/heart-solid.svg";

function Card(props) {
    const [isFavourite, setIsFavourite] = useState(false);

    const addToFavourite = () => {
        setIsFavourite(!isFavourite);
        if (!isFavourite) {
            props.getFavImages(props.cardContent.imgSrc);
        }else {
            props.removeFavImages(props.cardContent.imgSrc);
          }
    };

    return (
        <div className={`card ${isFavourite ? 'active' : ''}`}>
            <div className='icon'>
                {isFavourite && <img src={heart} className='icon' alt='heart' />}
            </div>

            <img src={props.cardContent.imgSrc} alt='' />
            <h3>{props.cardContent.placeName}</h3>
            <p>{props.cardContent.placeDescription}</p>
            <button onClick={addToFavourite}>
                {isFavourite ? 'Added to favourite' : 'Add to favourite'}
            </button>
        </div>
    );
}

export default Card;
