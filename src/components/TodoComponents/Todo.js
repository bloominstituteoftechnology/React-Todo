import React from "react";
import styled from "styled-components";

const ToDo = props => {
  return (
    <ToDoDiv
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.handleToggleCompleted(props.todo.id)}
    >
      <li>{props.todo.task}</li>
    </ToDoDiv>
  );
};

export default ToDo;

const ToDoDiv = styled.div`
  background: #97cabd;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  max-width: 250px;
  padding: 10px;
  margin: 16px auto;
  text-align: left;
`;
