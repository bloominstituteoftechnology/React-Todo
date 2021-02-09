import React from "react";
import styled from "styled-components";

const Todo = (props) => {
  const handleClick = () => {
    props.toggleTask(props.task.id);
  };
  return (
    <StyledDiv onClick={handleClick}>
      <p className={`${props.task.completed ? "completed" : ""}`}>{props.task.task}</p>
    </StyledDiv>
  );
};

export default Todo;

const StyledDiv = styled.div`

        .completed {
            text-decoration: line-through;
        }
    `
;
