import React from 'react';
import './Todo.css'

const Todo = (props) => {
    return (
      <div 
        onClick= {() => props.completeHandler(props.singleTodo.id)}
        className= {props.singleTodo.completed ? 'completed' : null}
      >
        {props.singleTodo.task}
      </div>
    );
};

export default Todo