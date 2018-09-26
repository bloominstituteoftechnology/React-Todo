import React from 'react';
import './Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (props) => {
    return (
      <section className="container">
        <section className="todo-container">
          {/* Takes as input (from props) each of the todos in state, iterates through (using .map), and renders them onscreen */}
          {props.list.map(todo => {
            return (
              <div>
                <Todo key={todo.id} id={todo.id} task={todo.task} onClick={props.toggleComplete} complete={todo.complete} />
              </div>
            )
          })}
        </section>
        <section className="input-container">
          <TodoForm submit={props.submit} clear={props.removeComplete}/>
        </section>
      </section>
    )
  }

  export default TodoList;