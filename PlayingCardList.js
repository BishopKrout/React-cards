import React from "react";
import uuid from "uuid";
import PlayingCard from "./PlayingCard";
import { useAxios } from "./hooks";
import "./PlayingCardList.css";

function PlayingCardList() {
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  const fetchCard = async () => {
    console.log("Fetching data from deckofcardsapi...");
    try {
      await addCard();
    } catch (error) {
      console.error("Error fetching card:", error);
    }
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={fetchCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;
