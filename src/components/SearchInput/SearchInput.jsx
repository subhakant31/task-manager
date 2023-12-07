import './SearchInput.scss';

function SearchInput(props) {

    function handleChange(e) {
        
    }
    return(
        <input type="text" className='search-task' onChange={handleChange}/>
    )
}

export default SearchInput;