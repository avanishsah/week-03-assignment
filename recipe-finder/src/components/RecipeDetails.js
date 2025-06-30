import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext'; // Import the context

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  
  const { favoritesState, dispatch } = useContext(FavoritesContext);
  
  const isFavorited = recipe && favoritesState.some(fav => fav.idMeal === recipe.idMeal);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        const data = await response.json();
        
        if (data.meals && data.meals.length > 0) {
          const recipeData = data.meals[0];
          setRecipe(recipeData);
          parseIngredients(recipeData); 
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]); 

  const parseIngredients = (recipe) => {
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim() !== '') {
        ingredientsList.push({
          ingredient,
          measure: measure || ''
        });
      }
    }
    setIngredients(ingredientsList);
  };

  const handleFavoriteClick = () => {
    if (isFavorited) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: recipe.idMeal });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: recipe });
    }
  };

  if (loading) {
    return <div className="loading">Loading recipe details...</div>;
  }

  if (!recipe) {
    return (
      <div className="error">
        <p>Recipe not found</p>
        <Link to="/">Back to Search</Link>
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <Link to="/" className="back-link">← Back to Search</Link>
      
      <h2>{recipe.strMeal}</h2>
      
      <button 
        onClick={handleFavoriteClick}
        className={`favorite-btn ${isFavorited ? 'favorited' : ''}`}
      >
        {isFavorited ? '💔 Remove from Favorites' : '❤️ Add to Favorites'}
      </button>
      
      <div className="detail-container">
        <img 
          src={recipe.strMealThumb} 
          alt={recipe.strMeal} 
          className="detail-image"
        />
        
        <div className="detail-info">
          <p><strong>Category:</strong> {recipe.strCategory}</p>
          <p><strong>Cuisine:</strong> {recipe.strArea}</p>
          
          <h3>Ingredients</h3>
          <ul className="ingredients-list">
            {ingredients.map((item, index) => (
              <li key={index}>
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="instructions">
        <h3>Instructions</h3>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;