// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo) => {
          console.log("inside todo", todo);
          if(todo.completed){
            return <li key={todo.id}>Id : {todo.id} Task: {todo.task} completed</li>;
          }else {
            return (
                <li key={todo.id}>Id : {todo.id} Task: {todo.task} not completed</li>
            )
          }
      })}
    </ul>
  );
};

export default TodoList;