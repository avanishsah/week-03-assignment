import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, loading }) => {
  if (loading) {
    return (
        <div className='message-container'>
            <p className='loading-message'>Searching for recipes.....</p>
        </div>
    )
  }
  

  if( !recipes || recipes.length === 0) {
    return (
        <div className='message-container'>
            <p className='no-results-message'>No recipes found...</p>
            <p>Try a diffrent recipe</p>
        </div>
    )
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;