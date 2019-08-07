import React from 'react';
import './Todo.css'

const Todo = props => {
    console.log(props.todo);
    return (
        <div
          //if todo.props.todo.completed
          className={`todo${props.todo.completed ? ' completed' : ''}`}

          onClick={() => props.toggleTask(props.todo.id)}
        >
          <p>{props.todo.task}</p>
        </div>
      );
}

export default Todo