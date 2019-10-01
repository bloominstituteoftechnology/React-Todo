import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';
import ClearCompletedForm from './ClearCompletedForm.js';
import styled from 'styled-components';

const StyledTodoWrapper = styled.div`
  color: white;
  section:first-of-type {
    background-color: #124149;
    padding: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 2.4rem;
      margin-bottom: 65px;
    }
  }

  h3 {
    font-size: 2rem;
    padding: 15px;
    padding-bottom: 25px;
    padding-right: 0;
    margin-top: 50px;
    color: #124149;
  }

  ul {
    list-style-type: none;
    padding-bottom: 10px;
    padding-left: 30px;
    font-size: 1.4rem;
    color: #124149;
  }
`;

const TodoList = props => (
  <StyledTodoWrapper>
    <section>
      <h2>React Classical Component Todos</h2>
      <TodoForm addTodo={props.addTodo} />
    </section>
    <section>
      <h3>Todos</h3>
      <ul>
        {props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} completeTodo={props.completeTodo} />
        ))}
      </ul>
    </section>
    <section>
      <ClearCompletedForm clearCompleted={props.clearCompleted} />
    </section>
  </StyledTodoWrapper>
);

export default TodoList;
