import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';
import ClearCompletedForm from './ClearCompletedForm.js';
import styled from 'styled-components';

const StyledTodoList = styled.ul`
  list-style-type: none;
`;

const TodoList = props => (
  <StyledTodoList>
    {props.todos.map(todo => (
      <Todo key={todo.id} todo={todo} completeTodo={props.completeTodo} />
    ))}
    <li>
      <TodoForm addTodo={props.addTodo} />
    </li>
    <li>
      <ClearCompletedForm clearCompleted={props.clearCompleted} />
    </li>
  </StyledTodoList>
);

export default TodoList;
