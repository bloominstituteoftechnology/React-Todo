import React from 'react';
import styled from 'styled-components';

const Todo = (props => {
    const handleClick = () => {props.toggleItem(props.item.id)}
    return (
        <StyledDiv 
        onClick={handleClick}
        className={`item${props.item.completed ? 'completed' : ''}`}
        >
            <p>{props.item.task}</p>
        </StyledDiv>
    )
})

export default Todo;

const StyledDiv = styled.div`
.completed {
    text-decoration: line-through;
}
`;