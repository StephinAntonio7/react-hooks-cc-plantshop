import React from "react";
import { useState } from "react";

function PlantCard({image, name, price}) {
  const [isInStock, setIsInStock] = useState(true);

  function handleClick (event) {
    setIsInStock(false);
  }

  return (

    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price:{price}</p>
      {isInStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
