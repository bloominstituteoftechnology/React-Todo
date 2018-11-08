import React from 'react';




const SearchBar = props => {
    return (
        < div className='searchbar'>
            <input 
            name='formInput'
            type='text' 
            placeholder='Search'
            value={props.formInput} 
            onChange={props.handleFormChange}
            />
        </div>
    );
}
export default SearchBar;