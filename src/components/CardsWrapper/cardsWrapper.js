import React from "react";
import './cardsWrapper.css';

const CardsWrapper = ({children}) => {
  return (
    <div className="cards-wrapper">
      {children}
    </div>
  );
};

export default CardsWrapper;
