import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';

const TodoList = (props) => {
  const clickHandler = () => {
    props.completionHandler();
  };
  return (
    <div>
      <StyledDiv>
        {props.tasks.map((task) => (
          <Todo toggleHandler={props.toggleHandler} key={task.id} task={task} />
        ))}
      </StyledDiv>
      <StyledButtonDiv>
        <button onClick={clickHandler} className='clear-butt'>
          Clear Completed Tasks
        </button>
      </StyledButtonDiv>
    </div>
  );
};

export default TodoList;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    padding: 10px 15px;
    margin: 15px auto;
    border: none;
    border-radius: 7px;
    font-size: 1.5rem;
    color: #f7f9fb;
    background: #e98074;
  }

  button:hover {
    box-shadow: 0 0 0 3px #e85a4f;
    outline: white;
  }

  button:focus {
    box-shadow: 0 0 0 3px #e85a4f;
    outline: white;
  }
`;
