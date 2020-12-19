import styled, { keyframes } from 'styled-components';

// Colors
const ThemeColors = {
  slate: '#203647',
  darkBlue: '#12232E',
  lightBlue: '#007CC7',
  skyBlue: '#4DA8DA',
  offWhite: '#EEFBFB',
};

// Components
const ThemeParagraph = styled.p({
  color: ThemeColors.offWhite,
  fontSize: (props) => (props.pageCounter ? '1rem' : '0.8rem'),
  margin: (props) => (props.pageCounter ? '10px 0' : 0),
  padding: '3px 0',
});

const ThemeButton = styled.button({
  display: 'inline',
  background: ThemeColors.lightBlue,
  border: `1px solid ${ThemeColors.lightBlue}`,
  borderRadius: '5px',
  color: ThemeColors.offWhite,
  padding: '5px',
  transition: '.3s ease-in-out',
  opacity: (props) => (props.disabled ? '.1' : '1'),
  '&:hover': {
    background: ThemeColors.offWhite,
    color: ThemeColors.lightBlue,
    cursor: 'pointer',
  },
});

const ThemeInput = styled.input({
  padding: '10px',
  color: ThemeColors.lightBlue,
  margin: '5px',
  border: 0,
  borderRadius: '10px',
  boxShadow: '0 0 15px 4px rgba(0, 0, 0, 0.06)',
});

// Animations
const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export { ThemeColors, ThemeParagraph, ThemeButton, ThemeInput, fade };
