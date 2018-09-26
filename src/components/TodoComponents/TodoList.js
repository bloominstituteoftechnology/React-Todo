// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
// import '.Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (props) => {
  return(
    <div className="toDoList-container">
       <TodoForm />
       <Todo list={props.list} />
    </div>
  );
}

export default TodoList;
