// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import {Button} from "@material-ui/core";
import styled from "styled-components";

const StyledDiv = styled.div`
    text-align: center;
`;

export default function TodoList(props) {
    return (
        <StyledDiv>
            {
                props.todos.map(el => {
                    return <Todo toggleTodo={props.toggleTodo} key={el.id} todo={el} />;
                  })
            }
            <Button variant="contained" color="primary" onClick={props.clearCompleted}>Clear Completed</Button>
        </StyledDiv>
    )
}