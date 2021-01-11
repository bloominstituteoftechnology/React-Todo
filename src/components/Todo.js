import React from 'react';

import styled from 'styled-components';

const Todo = (props) => {
  const clickHandler = () => {
    props.toggleHandler(props.task.id);
  };

  return (
    <StyledDiv>
      <div
        onClick={clickHandler}
        className={`todo${props.task.completed ? ' completed' : ''}`}
      >
        <p>{props.task.name}</p>
      </div>
    </StyledDiv>
  );
};

export default Todo;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
  .todo {
    font-size: 2rem;
    font-weight: bold;
  }
  p:hover {
    transform: scale(1.1);
  }
  .completed {
    text-decoration: line-through;
  }
`;
