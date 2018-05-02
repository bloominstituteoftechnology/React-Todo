// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo) => {
          console.log("inside todo", todo);
          if(todo.completed){
            return (
                <div key={todo.id}>
                    <span>Id : {todo.id} Task: {todo.task} completed</span>;
                </div>
            )
          }else {
            return (
                <div key={todo.id} >
                    <span>Id : {todo.id} Task: {todo.task} not completed </span>
                    <button onClick={ () => {props.removeTodo(todo.id)} }> completed </button>
                </div>
            )
          }
      })}
    </ul>
  );
};

export default TodoList;