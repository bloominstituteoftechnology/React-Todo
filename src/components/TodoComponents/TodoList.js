// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div>
      <h1>Todo List!</h1>
      {props.todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            completed={todo.completed}
            class={todo.completed && 'completed'}
            markComplete={props.markComplete}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
