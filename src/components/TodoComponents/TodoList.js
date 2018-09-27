import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = (props) => {
    return (
      <div className="container">

        {/* Section for todos */}
        <div className="todo-container">

          {/* Takes as input (from props) each of the todos in state, iterates through (using .map), and renders them onscreen */}
          {props.todos.map(todo => {
            return (
              <div>
                <Todo key={todo.id} id={todo.id} task={todo.task} onClick={props.toggleComplete} completed={todo.completed} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  export default TodoList;