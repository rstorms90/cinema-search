import { MoviesProvider } from '../../context/moviesContext';
import MovieList from '../movieList/MovieList';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Movie Search!</h1>
    </header>
    <MoviesProvider>
      <MovieList />
    </MoviesProvider>
  </div>
);

export default App;
