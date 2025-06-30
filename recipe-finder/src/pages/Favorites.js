// src/pages/Favorites.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import RecipeItem from '../components/RecipeItem';

const Favorites = () => {
  const { favoritesState } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h2>Your Favorite Recipes</h2>
      
      {favoritesState.length === 0 ? (
        <div className="no-favorites">
          <p>You haven't saved any favorites yet!</p>
          <p>Find recipes and click the ❤️ button to save them.</p>
          <Link to="/" className="back-link">Find Recipes</Link>
        </div>
      ) : (
        <div className="favorites-grid">
          {favoritesState.map(recipe => (
            <RecipeItem key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;