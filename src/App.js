import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./styles.css";
import cardData from './components/CardData';

function App() {
  let card = cardData.map((cardItem)=>{
    return (
      
         <Card cardContent={{
          imgSrc:cardItem.imgSrc,
          placeName:cardItem.placeName,
          placeDescription:cardItem.placeDescription,
          
         }}
         />
         
    );
  })
  return(
    <div>
      <Header/>
      <Hero/>
      <div className="card-container">{card}</div>
      
      <Footer/>
    </div>
  )
  
}

export default App;
