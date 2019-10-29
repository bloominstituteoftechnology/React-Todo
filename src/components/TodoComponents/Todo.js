import React from "react";
import styled from "styled-components"

const Container = styled.div`
width:22vw;
display:flex;
flex-direction:row;
justify-content:center;
flex-wrap: wrap;
`;
const P = styled.p`
font-family: 'Rock Salt', cursive;
font-size: 2rem;
color:#e0dbd1;
`;

const Todo = props => {
  return (
    <Container
      className={`task${props.task.completed ? " completed" : ""}`}
      onClick={() => props.toggleCompleted(props.task.id)}
    >
      <P>-{props.task.task}</P>
    </Container>
  );
};

export default Todo;
