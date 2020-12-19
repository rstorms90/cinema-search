import { ThemeButton } from '../../../styles/theme';

const Button = ({ onClick, disabled, text }) => {
  return (
    <ThemeButton data-testid="button" onClick={onClick} disabled={disabled}>
      {text}
    </ThemeButton>
  );
};

export default Button;
