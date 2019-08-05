//This takes in the todo data and displays the task to the screen
import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = props => {
    console.log('props', props.item.task)


  return (

    <>
    <div className={`item${props.item.completed ? ' completed' : ''}`} onClick={() => props.toggleItem(props.item.id)}>

    <p>{props.item.task}</p>
    </div>
    
    </>
  );
};

export default Todo;
