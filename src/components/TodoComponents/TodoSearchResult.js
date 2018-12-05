import React from 'react';
import Todo from './Todo';

const TodoSearchResult = props => {
  let message = "";
  if(props.todos.length !== 0) message = "Search result:";
  return (
    <div className="result">
      <h2>{message}</h2>
      <div className="list">{props.todos.map( todo => <Todo todo={todo} key={todo.id} todoClick={props.todoClick}/> )}</div>
    </div>
  );
};

export default TodoSearchResult;