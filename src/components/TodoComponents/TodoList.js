// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const StyledList = styled.div`
max-width: 100%;
margin: 50px 0;
font-size: 40px;
font-weight: bold;
border-top: 2px solid black;
border-bottom: 2px solid black;
`

const TodoList = props => {
    return (
      <StyledList>
        My TODO List!
        {props.todoItems.map(todoItem => (
          <Todo
            key={todoItem.id}
            listItem={todoItem}
            markComplete={props.markComplete}
          />
        ))}
      </StyledList>
    );
  };
  
  export default TodoList;
  