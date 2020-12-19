import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('renders SearchBar component', () => {
    render(<SearchBar />);
  });

  test('onChange fires', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <SearchBar type="text" placeholder="placeholder" onChange={onChange} />
    );
    const input = getByRole('textbox');
    const mockTypingEvent = {
      target: {
        value: 'changed-value',
      },
    };
    fireEvent.change(input, mockTypingEvent);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
