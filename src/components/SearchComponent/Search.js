import React from 'react';
import './Search.css';

const Search = (props) =>{
  return(
    <input
    type="text"
    onChange={props.updateSearch}
    name="search"
    value={props.value}
    placeholder="search"/>
  )
}

export default Search;
