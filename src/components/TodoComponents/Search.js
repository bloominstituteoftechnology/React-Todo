import React from 'react';
import './Todo.css';

const Search = ({value, onChange, showSearch, searchClicked}) => {
    return (
        <div className="search-container">
            <i 
                className={`fa fa-search search-btn ${showSearch ? 'color-orange' : ''}`}
                onClick={searchClicked}
            ></i>
            <input 
                type="text"
                name="search"
                value={value}
                onChange={onChange}
                placeholder="search..."
                className={`search-input ${showSearch ? 'show-input' : ''}`}
                maxLength="20"
            />
        </div>
    );
}

export default Search;
