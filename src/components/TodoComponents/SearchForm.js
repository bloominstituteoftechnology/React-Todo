import React from 'react';
 const SearchForm = props => {
    return (
        <div>
            <form onSubmit={props.searchItems}>
                <input type="text" name="searchText" 
                placeholder="add new list item" value={props.searchText}
                onChange={props.handleChange} />
                <button type="submit">Search</button>
                <button onClick={props.clearSearch}>Clear</button>
            </form>
        </div>
    );
}
 export default SearchForm; 