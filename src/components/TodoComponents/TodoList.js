// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import ToDoForm from './TodoForm';

 const ToDoList = (props) => {
  return (
    <div>
      <div>
        {props.list.map(todoItem => {
          return (
            <Todo key={todoItem.id} id={todoItem.id} task={todoItem.task} />
          );
        })}
      </div>
      <ToDoForm submit={props.submit} />
    </div>
  );
}
 export default ToDoList;