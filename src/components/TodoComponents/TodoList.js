import React from 'react';
import './Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (props) => {
    return (
      <div className="container">

        {/* Section for todos */}
        <div className="todo-container">

          {/* Takes as input (from props) each of the todos in state, iterates through (using .map), and renders them onscreen */}
          {props.list.map(todo => {
            return (
              <div>
                <Todo key={todo.id} id={todo.id} task={todo.task} onClick={props.toggleComplete} completed={todo.completed} />
              </div>
            )
          })}
        </div>

        {/* Section for input form and buttons */}
        <div className="input-container">
          <TodoForm submit={props.submit} clear={props.removeComplete}/>
        </div>
      </div>
    )
  }

  export default TodoList;