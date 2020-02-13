import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const ListStyle= styled.div`
 display:flex;
 flex-direction: column;
 width: 40%;
 margin-left: 30%;
 background: #0fbfff;
 color: #ffffff;
 font-size: 150%;
 font-weight: 700;
 border-top-radius:5px;
 align-items:center;

 [type="text"]{
    ul {
        background: #cce5ff;
        margin: 5px;
      }
 }
`;


const TodoList = props => {
  return (
    <ListStyle>
      {props.todos.map(todo => (
        <Todo handleSetComplete={props.handleSetComplete} key={todo.id} todo={todo} />
      ))}
    </ListStyle>
  );
};

export default TodoList;