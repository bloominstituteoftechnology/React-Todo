import React from 'react';


const SearchBar = props =>{
    return(
        <input 
            value={props.task}
            type="text"
            placeholder="Search"
            name="search"
            onChange={props.handleChanges}
            className="new-todo-input"
        />
    )
}

export default SearchBar;