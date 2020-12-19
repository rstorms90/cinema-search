import { useState, useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
    const API_KEY = process.env.REACT_APP_API_KEY;

    async function getMovies() {
      try {
        const moviesJson = await fetch(`${URL}${API_KEY}`);
        const results = await moviesJson.json();
      } catch (e) {
        throw new Error(e);
      }
    }
    getMovies();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Search!</h1>
      </header>
    </div>
  );
}

export default App;
