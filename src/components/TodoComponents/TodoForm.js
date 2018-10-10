import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #8C2F5B;
  font-size: 0.6em;
  padding: 0.25em 1em;
  border: 2px solid #8C2F5B;
  border-radius: 3px;
`;

const TodoForm = props => {
  return (
    <form>
      <input type="text" id="todoInput" name="todo" placeholder="...todo" onChange={props.inputChange} value={props.todo} />
      <Button onClick={props.addTodo}>Add Todo</Button>
      <Button onClick={props.clearTodo}>Clear Completed</Button>
    </form>
  )
}

export default TodoForm;