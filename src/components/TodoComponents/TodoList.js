// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import './Todo.css';
import Todo from './Todo.js';

const TodoList = (props) => {
    return (
      <div className="list-container">
          {/* Takes as input (from props) each of the todos in state, iterates through (using .map), and renders them onscreen */}
          {props.todos.map(todo => {
            return (
              <div>
                <Todo key={todo.id} id={todo.id} task={todo.task} onClick={props.toggleComplete} completed={todo.completed} />
              </div>
            )
          })}
      </div>
    )
  }

  export default TodoList;
