import React from 'react';
import './searchForm.css';

const SearchForm = props => {
    return(
        <div className='search-bar'>
            <form>
                <input 
                    type="text" 
                    name='searchText' 
                    placeholder='Search...' 
                    value={props.searchText} 
                    onChange={props.handleChange} 
                    />
            </form>
        </div>
    );
}

export default SearchForm;