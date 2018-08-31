import React from 'react';

import './Search.css';

const Search = (props) => {
    return (
        <div>
            <input 
                value = {props.searchText} 
                onChange = {props.onChangeSearch} 
                placeholder = "Search your Todo list..." 
            />
        </div>
    );
} // Search

export default Search;
