import React from "react";
import styled  from 'styled-components';

const Todo = props => {

    return(
    <div className="red"
    style={props.todo.completed ? {textDecoration: 'line-through'}: null}
    onClick={() => props.handleToggleComplete(props.todo.id)}>
        <TodoContainer>
           {props.todo.task}
           </TodoContainer>
        </div>
        );
}
export const TodoContainer = styled.div`
.red {
    background-color: red;
    text-decoration: line-through;
}
`;
export default Todo;