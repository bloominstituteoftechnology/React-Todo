import React from 'react';

function TodoList(props) {
  const todos = props.todo;
  console.log(todos);

  const listTodos = todos.map((todo) =>
  <li>{todo}</li>
  );
  return (
      <ul>{listTodos}</ul>
  );
}

export default TodoList;