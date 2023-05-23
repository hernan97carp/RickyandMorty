import React from "react";
import Card from "./Card";
import "./stylesheet/cards.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className="containerCard">
      {characters.map((personaje) => {
        return (
          <Card
            onClose={onClose}
            key={personaje.id}
            id={personaje.id}
            status={personaje.status}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin?.name}
            image={personaje.image}
          />
        );
      })}
    </div>
  );
}
