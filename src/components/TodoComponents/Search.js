import React from 'react';

const Search = ({value, onChange, clearSearch}) => {
    return (
        <div className="search-container">
            <input 
                type="text"
                name="search"
                value={value}
                onChange={onChange}
                placeholder=" &#xF002;"
                onBlur={clearSearch}
            />
        </div>
    );
}

export default Search;
