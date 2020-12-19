import { MoviesProvider } from '../../context/moviesContext';
import MovieList from '../movieList/MovieList';

import styled from 'styled-components';
import { ThemeColors, fade } from '../../styles/theme';

const App = () => (
  <AppWrapper>
    <Header>
      <h1 data-testid="header-title">Cinema Search!</h1>
    </Header>
    <MoviesProvider>
      <MovieList />
    </MoviesProvider>
  </AppWrapper>
);

const AppWrapper = styled.div`
  text-align: center;
  background-color: ${ThemeColors.darkBlue};
  height: 100%;
`;

const Header = styled.header`
  animation: ${fade} 0.2s linear;
  background-color: ${ThemeColors.lightBlue};
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${ThemeColors.offWhite};
`;

export default App;
