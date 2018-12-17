// import TodoList from "./TodoList";

/*
    <Todo /> is a component that takes in the todo data and 
    displays the task to the screen.
*/

import React from 'react';

const Todo = props => {
    console.log('Todo props', props)
    return (
        <div
          id={props.id}
          onClick={props.completeHandler}
          style={{ 'textDecoration': props.completed ? 'line-through' : null }}
        >{props.task}
        </div>
    )
}

export default Todo;