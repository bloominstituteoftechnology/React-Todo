// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';



function TodoList(props) {
   return (
    <div>
      {props.todoList.map( todoItem => <Todo key={todoItem.id} todoItem={todoItem} />)}
    </div>
   );
 };

export default TodoList;