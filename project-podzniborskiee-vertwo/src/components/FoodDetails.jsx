import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(`/foods/${id}.json`)
      .then(response => response.json())
      .then(data => setFood(data));
  }, [id]);

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div className="food-details-container container-food-details">
      <h1 id="food-name">{food.name}</h1>
      <img id="food-image" src={food.image} alt="sample image" />
      <p id="food-description">{food.description}</p>
      <h2>Ingredients:</h2>
      <ul id="food-ingredients">
        {food.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <div id="food-instructions" dangerouslySetInnerHTML={{ __html: food.instructions }} />
    </div>
  );
};

export default FoodDetails;