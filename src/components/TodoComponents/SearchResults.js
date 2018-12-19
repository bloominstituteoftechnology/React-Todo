import React from 'react';
import Todo from './Todo.js';

const SearchResults = props =>{
  const resultList = props.searchResults.map((result,index) => {


    return <Todo   listClass ={(props.resultList[index].completed ? 'completed-todo': "")} identifier = {props.resultList[index].id} content = {props.resultList[index].task}  />
  });
  return(

    <ul className ={props.showResults ? "": "hidden"}>{resultList}</ul>

  );
};

export default SearchResults;
