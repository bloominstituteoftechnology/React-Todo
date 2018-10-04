import React from 'react';

const Search = ({value, onChange}) => {
    return (
        <div className="search-container">
            <input 
                type="text"
                name="search"
                value={value}
                onChange={onChange}
                placeholder=" &#xF002;"
            />
        </div>
    );
}

export default Search;
