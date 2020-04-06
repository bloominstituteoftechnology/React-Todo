// your components will all go in this `component` directory.
// feel free to change this component.js into

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todoItems.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo}/>
      ))}
      <button className='clear-btn' onClick={props.clearCompleted}>
        Clear Todo List
      </button>
    </div>
  )
}

export default TodoList;
