import React from 'react';
import styled, { css } from 'styled-components';

import check from '../../assets/check.svg';

const StyledTodo = styled.li`
  transition: 200ms;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  input[type='checkbox'] {
    opacity: 0;
  }

  label {
    position: relative;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: '';
      transition: 200ms;
      position: absolute;
      opacity: 0;
      background-image: url(${check});
      left: -35px;
      width: 25px;
      height: 25px;
    }
  }

  ${props =>
    props.completed &&
    css`
      & {
        color: rgba(0, 0, 0, 0.5);
      }
      label {
        &::before {
          opacity: 1;
        }
      }
    `}
`;

const Todo = props => (
  <StyledTodo completed={props.todo.completed}>
    <input
      type='checkbox'
      id={props.todo.title}
      name={props.todo.title}
      onClick={() => props.completeTodo(props.todo.id)}
    />
    <label htmlFor={props.todo.title}>{props.todo.title}</label>
  </StyledTodo>
);

export default Todo;
