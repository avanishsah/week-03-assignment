import React, { createContext, useReducer, useEffect } from 'react';

const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.some(recipe => recipe.idMeal === action.payload.idMeal)) {
        return state;
      }
      return [...state, action.payload];
    
    case 'REMOVE_FAVORITE':
      return state.filter(recipe => recipe.idMeal !== action.payload);
    
    default:
      return state;
  }
};

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoritesState, dispatch] = useReducer(favoritesReducer, initialState);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoritesState));
  }, [favoritesState]);

  return (
    <FavoritesContext.Provider value={{ favoritesState, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};