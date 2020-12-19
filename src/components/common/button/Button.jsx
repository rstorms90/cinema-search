import { ThemeButton } from '../../../styles/theme';

const Button = ({ onClick, disabled, text }) => {
  return (
    <div className="Button" style={{ display: 'inline' }}>
      <ThemeButton onClick={onClick} disabled={disabled}>
        {text}
      </ThemeButton>
    </div>
  );
};

export default Button;
