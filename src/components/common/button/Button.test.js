import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me</Button>);
    fireEvent.click(screen.getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
