import React, { createContext, useState, useEffect } from 'react';

export const MoviesContext = createContext();

export function MoviesProvider(props) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [query, setQuery] = useState(null);
  const [pageQuery, setPageQuery] = useState(null);

  useEffect(() => {
    if (query === '') setCurrentPage(1);

    if (query) {
      const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
      const API_KEY = process.env.REACT_APP_API_KEY;
      const language = '&language=en-US';

      async function getMovies() {
        try {
          const moviesJson = await fetch(
            `${URL}${API_KEY}${language}&query=${query}&page=${currentPage}`
          );
          const { results, total_pages, page } = await moviesJson.json();

          setMovies(results);
          setCurrentPage(page);
          setTotalPages(total_pages);
        } catch (e) {
          throw new Error(e);
        }
      }
      getMovies();
    }
  }, [query, currentPage, totalPages]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        currentPage,
        setCurrentPage,
        totalPages,
        query,
        setQuery,
        pageQuery,
        setPageQuery,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}
