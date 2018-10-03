import React from 'react';
import Todo from './Todo';

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
            completed={todo.completed}
            style={props.style}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
