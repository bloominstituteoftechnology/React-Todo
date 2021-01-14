import React from 'react';

const SearchBar = props => {
    return (
        <input type="search" className="search" placeholder="Search for Tasks ..." onChange={props.handleChange} />
    )
};

export default SearchBar;