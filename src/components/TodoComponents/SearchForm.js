import React from 'react';

const SearchForm = props => {
    return(
        <div>
            <form onInput={props.searchTodos}>
                <input type="text" name='searchText' placeholder='filter through Todos' value={props.searchText} onChange={props.handleChange} />
            </form>
        </div>
    );
}

export default SearchForm;