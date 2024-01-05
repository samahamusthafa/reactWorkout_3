import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./styles.css";
import cardData from './components/CardData';

function App() {
  let [favImages, setFavImages] = useState([]);

  function getFavImages(imgSrc) {
    setFavImages((prevFavImages) => [...prevFavImages, imgSrc]);
  }

  function removeFavImages(imgSrc) {
    setFavImages((prevFavImages) => prevFavImages.filter((src) => src !== imgSrc));
  }

  let cards = cardData.map((cardItem, index) => (
    <Card
      key={index}
      cardContent={{
        imgSrc: cardItem.imgSrc,
        placeName: cardItem.placeName,
        placeDescription: cardItem.placeDescription,
      }}
      getFavImages={getFavImages}
      removeFavImages={removeFavImages}
    />
  ));

  return (
    <div>
      <Header />
      <Hero />
      <h2>Destinations</h2>
      <div className="card-container">{cards}</div>
      <aside>
        <h2>Favorites</h2>
        {favImages.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt="Favorite" />
        ))}
      </aside>
      <Footer />
    </div>
  );
}

export default App;
