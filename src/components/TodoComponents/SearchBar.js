import React from 'react';
import './Todo.css';

const SearchBar = props =>{

  return(
    <div>
      <input className = "search-bar" type = "text" placeholder = "type search term here" onChange ={props.searchFunction} />
      <button className ={props.showResults ? "hidden": ""} onClick = {props.submitSearch} >Submit</button>
      <button className ={props.showResults ? "" : "hidden"} onClick = {props.clearSearch} >Go back</button>

    </div>
  );

}


export default SearchBar;
