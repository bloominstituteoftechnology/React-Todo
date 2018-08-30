import React from 'react';
import Todo from './Todo.js';
import './Todo.css';


const TodoList = (props) => {
  return (
    <ul className='todo-list'>
      {props.todos.map(todo =>
        <Todo key={todo.id} todo={todo}
              completedToggle={props.completedToggle}/>
      )}
    </ul>
  );
}

export default TodoList;