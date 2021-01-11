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
  .todo {
    font-size: 2rem;
  }
  .completed {
    text-decoration: line-through;
  }
`;
