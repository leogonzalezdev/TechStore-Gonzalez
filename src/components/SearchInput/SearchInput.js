import icon from '../../img/search-icon.svg';
import './SearchInput.css';

const SearchInput = () => {
  return(
    <div className='search-input-container'>
      <button type='submit' className='search-icon'>
        <img src={icon}/> 
      </button>
      <input type='text' className='search-input' />
    </div>
  );
}
export default SearchInput;