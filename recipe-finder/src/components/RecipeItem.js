import React from 'react';
import { Link } from 'react-router-dom'; 

const RecipeItem = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.idMeal}`} className="recipe-card"> 
      <div className="recipe-image-container">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="recipe-image"
          loading="lazy"
        />
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.strMeal}</h3>
      </div>
    </Link>
  );
};

export default RecipeItem;