import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';
import ClearCompletedForm from './ClearCompletedForm.js';
import styled from 'styled-components';

const StyledTodoWrapper = styled.div`
  section:first-of-type {
    background-color: blue;
    padding: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    h2 {
      color: white;
      font-size: 2rem;
      margin-bottom: 35px;
    }
  }

  h3 {
    font-size: 1.6rem;
    padding: 15px;
    padding-right: 0;
  }

  ul {
    list-style-type: none;
    padding-bottom: 40px;
    padding-left: 30px;
    font-size: 1rem;
  }
`;

const TodoList = props => (
  <StyledTodoWrapper>
    <section>
      <h2>React Classical Component Todos</h2>
      <TodoForm addTodo={props.addTodo} />
    </section>
    <h3>Todos</h3>
    <ul>
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} completeTodo={props.completeTodo} />
      ))}
    </ul>
    <section>
      <ClearCompletedForm clearCompleted={props.clearCompleted} />
    </section>
  </StyledTodoWrapper>
);

export default TodoList;
