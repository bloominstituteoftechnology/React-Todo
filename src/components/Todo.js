import React from "react";
import {Card} from "@material-ui/core";
import styled from "styled-components";

const StyledCard = styled(Card)`
    display: flex;
    width: 50%;
    margin: 5px 25%;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
`;

const StyledP = styled.p`
    font-family: Roboto;
`;

export default function Todo(props) {
    return (
        <StyledCard onClick={() => props.toggleTodo(props.todo.id)} className={`todo${props.todo.completed ? " completed" : ""}`}>
            <StyledP>{props.todo.name}</StyledP>
        </StyledCard>
    )
}