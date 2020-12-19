import { useContext } from 'react';
import { MoviesContext } from '../../context/moviesContext';
import Movie from '../movie/Movie';
import SearchBar from '../searchBar/SearchBar';
import Button from '../common/button/Button';
import reel from '../../images/reel.jpg';

import styled, { keyframes } from 'styled-components';
import { ThemeColors, ThemeParagraph } from '../../styles/theme';

function MovieList() {
  // Context
  const {
    movies,
    currentPage,
    setCurrentPage,
    totalPages,
    query,
    setQuery,
    pageQuery,
    setPageQuery,
  } = useContext(MoviesContext);

  const prevPage = () => {
    if (movies && currentPage !== 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const nextPage = () => {
    if (movies && currentPage < totalPages) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  const handleClick = () => {
    if (pageQuery > totalPages) return null;
    setCurrentPage(pageQuery);
  };

  const filterSearch = (e) => setQuery(e.target.value);
  const filterPage = (e) => setPageQuery(Number(e.target.value));

  // Disable pagination buttons
  const isQueryingAndCurrentPage = query && movies && currentPage;
  const disabledPrev = isQueryingAndCurrentPage === 1 && 'disabled';
  const disabledNext = isQueryingAndCurrentPage === totalPages && 'disabled';

  // Warnings
  const unavailablePage = pageQuery > totalPages && (
    <ThemeParagraph>Page unavailable.</ThemeParagraph>
  );

  const mapMovies =
    totalPages !== 0 && movies ? (
      <div className="movie-list-container">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    ) : (
      <p>No Results</p>
    );

  return (
    <MovieListWrapper>
      <section className="Movie-List">
        <SearchBar
          type="text"
          placeholder="Search by Movie Title"
          onChange={filterSearch}
        />
        {query && totalPages !== 0 && (
          <div className="movie-list-control-btns">
            <div className="movie-list-page-filter-container">
              <SearchBar
                type="number"
                placeholder="Go to Page #..."
                onChange={filterPage}
              />

              {!unavailablePage && pageQuery !== 0 && (
                <Button onClick={handleClick} text="Go!" />
              )}
            </div>
            {unavailablePage}
            <div className="movie-list-paginate-container">
              <Button
                onClick={prevPage}
                disabled={disabledPrev}
                text="Previous Page"
              />
              <Button
                onClick={nextPage}
                disabled={disabledNext}
                text="Next Page"
              />
            </div>

            <ThemeParagraph pageCounter={true}>
              Page: {currentPage} / {totalPages}
            </ThemeParagraph>
          </div>
        )}
        {mapMovies}
      </section>

      {query === null && (
        <div>
          <img alt="logo" className="movie-list-reel-logo" src={reel} />
        </div>
      )}
    </MovieListWrapper>
  );
}

const movingGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const MovieListWrapper = styled.div`
  background: linear-gradient(
    135deg,
    ${ThemeColors.darkBlue},
    ${ThemeColors.darkBlue},
    ${ThemeColors.darkBlue},
    ${ThemeColors.offWhite} 90%,
    ${ThemeColors.darkBlue} 100%
  );
  background-size: 400% 400%;
  animation: ${movingGradient} 14s ease infinite;

  .Movie-List {
    z-index: 10;
  }

  .movie-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .movie-list-page-filter-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .movie-list-paginate-container {
    display: flex;
    justify-content: space-evenly;
  }

  .movie-list-reel-logo {
    opacity: 0.5;
    width: 100%;
  }
`;

export default MovieList;
