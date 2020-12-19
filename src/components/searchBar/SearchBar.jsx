import { ThemeInput } from '../../styles/theme';

const SearchBar = ({ type, placeholder, onChange }) => {
  return (
    <div className="SearchBar">
      <ThemeInput
        data-testid="searchbar"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
