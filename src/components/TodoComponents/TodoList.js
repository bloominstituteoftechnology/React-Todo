import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
  return (
    <div className="TodoList">
      {props.todos.map(todo => {
        return (
          <Todo
            toggleCompleteTask={props.toggleCompleteTask}
            key={todo.id}
            task={todo.task}
            id={todo.id}
            style={props.style}
            inlineStyle={todo.completed ? props.inlineStyle : null}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
