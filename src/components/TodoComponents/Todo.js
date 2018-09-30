import React from 'react';
import './Todo.css';

const Todo = (props) => {
     
   const toggleCompleted = (event) => {
      let target = event.target;
      if(target.tagName === 'P') {
             target.classList.toggle('completed');
             props.toggle(props.id);
      }
   }
   return(
        <p className='items' id={props.todo.id} onClick={toggleCompleted} >{props.todo.task}</p> 
      );
}

export default Todo;