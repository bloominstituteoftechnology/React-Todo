import React from 'react';

const SearchBar = (props) => {
    return (
        <form className="search-bar">
            <input type="text" onChange={props.searchTasks} placeholder="Search Tasks"/>
        </form>
    )
}

export default SearchBar;