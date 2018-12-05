import React from 'react';

import './Todo.css';


const TodoSearch = props => {
  return (
    <div className="search">
      <input type="text" placeholder="Search todo list" value={props.searchWord} onChange={props.setSearchWord} onKeyDown={props.searchEnter}/>
      <button onClick={props.searchBtn}>Search</button>
      <button onClick={props.clearSearch}>Clear Search</button>
    </div>
  );
};

export default TodoSearch;