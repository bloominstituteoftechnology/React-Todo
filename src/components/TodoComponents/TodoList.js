import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <Todo key={todo.id} todo={todo} completeTodo={props.completeTodo} />
    ))}
    <li>
      <TodoForm addTodo={props.addTodo} />
    </li>
  </ul>
);

export default TodoList;
