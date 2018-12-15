import React from 'react';
import './Search.css';

const Search = (props) =>{
  return(
    <div className="searchBox">
      <input
      type="text"
      onChange={props.updateSearch}
      name="search"
      value={props.value}
      placeholder="search..."/>
  </div>
  )
}

export default Search;
