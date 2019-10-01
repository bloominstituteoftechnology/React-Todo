import React from 'react';
import styled from 'styled-components';

const TodoStyle = styled.div `
.item{
    color: red;
}
.item.completed {
    text-decoration: line-through;
    cursor: pointer;
}
`

const Todo = props => {
    return (
       <TodoStyle>
        <div
        className={`item${props.item.completed ?  ' Completed' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
        </TodoStyle>
    )
}
export default Todo;