// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div>
      <h1>Todo List!</h1>
      {props.todo.map((todo) => {
        return <TodoItem todoItem={todo.item} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
