import { useState } from 'react';
import reel from '../../images/reel.jpg';

import styled from 'styled-components';
import breakpoint from '../../styles/breakpoints';
import {
  ThemeColors,
  ThemeParagraph,
  ThemeButton,
  fade,
} from '../../styles/theme';

const Movie = ({
  movie: { poster_path, title, release_date, vote_average, overview },
}) => {
  const [isInfo, setIsInfo] = useState(false);

  const handleClick = () => setIsInfo(!isInfo);

  const rootSrc = 'https://image.tmdb.org/t/p/w185';

  return (
    <MovieWrapper className="Movie">
      {!isInfo ? (
        <>
          <MovieImg
            alt={poster_path ? poster_path : 'Movie poster unavailable'}
            src={poster_path ? `${rootSrc}` + poster_path : reel}
          />
          {!poster_path && <ThemeParagraph>Poster unavailable.</ThemeParagraph>}
          <MovieTitle>{title}</MovieTitle>
          <ThemeParagraph>Released: {release_date}</ThemeParagraph>
          <ThemeParagraph>Vote Avg: {vote_average} / 10</ThemeParagraph>
        </>
      ) : (
        <MovieOverview>{overview}</MovieOverview>
      )}

      {overview !== '' && (
        <ThemeButton onClick={handleClick}>
          {isInfo ? 'Less Info' : 'More Info'}
        </ThemeButton>
      )}
    </MovieWrapper>
  );
};

const MovieWrapper = styled.div`
  padding: 15px;

  @media only screen and ${breakpoint.device.xs} {
    justify-content: center;
    padding: 5px;
    flex-basis: 100%;
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-basis: 21%;
  }
  @media only screen and ${breakpoint.device.md} {
    flex-basis: 21%;
  }
`;

const MovieImg = styled.img`
  animation: ${fade} 0.3s linear;
  border-radius: 10px;
  width: 150px;

  @media only screen and ${breakpoint.device.xs} {
    width: 170px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 180px;
  }
`;

const MovieTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${ThemeColors.offWhite};
  margin: 5px 0;
`;

const MovieOverview = styled.p`
  animation: ${fade} 0.2s linear;
  color: ${ThemeColors.offWhite};
  text-align: left;
  min-height: 275px;

  @media only screen and ${breakpoint.device.xs} {
    text-align: center;
  }
  @media only screen and ${breakpoint.device.sm} {
    text-align: left;
  }
`;

export default Movie;
