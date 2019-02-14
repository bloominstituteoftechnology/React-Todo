import React from 'react';
import './Todo.css';

const Search = props => {
    return (
        <div className="searchContainer">
            <input 
                className="search" 
                type="text" 
                placeholder="*search list*"
                value={props.value}
                name="search"
                onChange={props.handleSearch}
            />
        </div>
    )
}

export default Search;