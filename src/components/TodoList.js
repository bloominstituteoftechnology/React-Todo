// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';


const TodoList = props => {
  return (
    <ul>
      {props.todos.map(newTodo => {
        return <li key={newTodo.id}>{newTodo.name}</li>;
      })}
    </ul>
  );
};



export default TodoList;
