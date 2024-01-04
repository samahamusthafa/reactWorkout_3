import React, { useState } from 'react';

import heart from "../assets/heart-solid.svg";

function Card(props) {
    // let favourites = useState("Add to favourite");

    // let favBtnText = favourites[0];
    // let setFavourite = favourites[1];

    let [btnTextState,setBtnTextState] = useState("Add to favaourite");
    let [classState,setClassState] = useState("");

    function addToFavourite(){
        setBtnTextState((prevState)=>{
            if(prevState === "Add to favourite"){
                return "Added to favourite";
            }else{
                return "Add to favourite";
            }
        })

        setClassState((prevClass)=>{
            if(prevClass == ""){
                return "active";
            }else{
                return "";
            }
        })
    }
  return (
    <div className={`card ${classState}`}>
        <img src={heart} className='icon'/>
        <img src={props.cardContent.imgSrc} alt=''/>
        <h3>{props.cardContent.placeName}</h3>
        <p>Ph:{props.cardContent.placeDescription}</p>
        <button onClick={addToFavourite}>{btnTextState}</button>
        
      
    </div>
  )
}

export default Card
