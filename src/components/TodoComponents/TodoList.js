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
            todo={todo}
            inlineStyle={props.inlineStyle}
            style={props.style}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
