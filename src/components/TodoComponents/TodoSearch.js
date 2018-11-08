import React from 'react';

const TodoForm = props => {
    return (
        <form className="search">
            <input 
                type="text"
                name="searchText"
                placeholder="Search"
                value={props.searchText}
                onChange={props.search}
                className="search-form"
            />
        </form>    
    );

}
export default TodoForm;