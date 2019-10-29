import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const ListContainer = styled.div`
  height: 60vh;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content:center;
  flex-wrap: wrap;
  text-align: center;
`;

const Button = styled.button`
width: 350px;
height:50px;
border-radius:5px
background-color:#242c3c
color:#e0dbd1;
font-family: 'Rock Salt', cursive;
margin-top:2%;
font-size: 1.2rem;
align-self: flex-end;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoList = props => {
  return (
    <Container>
      <ListContainer className="todo-list">
        {props.todos.map(task => (
          <Todo
            key={task.id}
            task={task}
            toggleCompleted={props.toggleCompleted}
            deleteItem={props.deleteItem}
          />
        ))}
      </ListContainer>
      <Button className="clear-btn" onClick={props.deleteComplete}>
        Clear completed tasks
      </Button>
    </Container>
  );
};

export default TodoList;
