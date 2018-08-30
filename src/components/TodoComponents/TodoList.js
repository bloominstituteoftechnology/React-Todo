import React from 'react';
import Todo from './Todo.js';
import './Todo.css';


const TodoList = (props) => {
  return (
    <ul className='todo-list'>
      {props.todos.map(todo =>
        <Todo key={todo.id}
              todo={todo}
              toggleCompleted={props.toggleCompleted}/>
      )}
    </ul>
  );
}

export default TodoList;