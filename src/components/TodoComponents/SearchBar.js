import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="searchBar">
      <div className="searchBarContainer">
        <input
          className="fa fa-input"
          name="filter"
          placeholder="&#xf002; Filter Your Todos"
          onChange={props.handleInputChange}
          value={props.filter}
        />
      </div>
    </div>
  )
}

export default SearchBar;