// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'; 

import Todo from './Todo';
import TodoForm from './TodoForm';
import './Todo.css';



  const TodoList = ({lineThrough, todo}) => {
     return (
             todo.map(i => {
                 return <Todo lineThrough={lineThrough} {...i}></Todo>
             })
          );
      
  }

  export default TodoList 