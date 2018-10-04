import React from 'react';
import Todo from './Todo';
import './Todo.css'

const TodoList = props => {
  return(
    <div className="list-container">
      {props.todoData.map(todo => (
        <Todo
          task={todo.task}
          id={todo.id}
          key={todo.id}
          completed={todo.completed}
          toggleComplete={props.toggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;
