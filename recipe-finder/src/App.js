import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FavoritesProvider, FavoritesContext } from './context/FavoritesContext';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetails';
import Favorites from './pages/Favorites';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('veg');
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  const { favoritesState } = useContext(FavoritesContext);
  const location = useLocation(); 

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchRecipes();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setQuery(searchTerm);
    setHasSearched(true);
  };

  return (
    <div className='app'>
      <header>
        <Link to="/" className="title-link">
          <h1>Recipe Finder</h1>
        </Link>
        
        <nav>
          <Link to="/favorites" className="favorites-link">
            Favorites {favoritesState.length > 0 && `(${favoritesState.length})`}
          </Link>
        </nav>
        
        {location.pathname === "/" && (
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
        )}
      </header>

      <Routes>
        <Route path="/" element={
          <RecipeList
            recipes={recipes}
            loading={loading}
            hasSearched={hasSearched}
          />
        } />

        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesProvider>
  );
}