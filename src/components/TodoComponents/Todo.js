import React from 'react';
import './Todo.css';
import styled from 'styled-components';

const Styledh1 = styled.h1`
    font-size: 30px;
    margin: 15px 0;
    padding: 5px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 10px 10px 5px gray;
`
const Todo = props => {
    return <Styledh1
        onClick={()=>props.markComplete(props.listItem.id)}
        className={`list-item ${props.listItem.completed ? 'completed' : 'incomplete'} ${props.listItem.display ? 'displayed' : 'hidden'}`}
    >{props.listItem.listItem}</Styledh1>
}

export default Todo;