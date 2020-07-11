import React from 'react';
import styled, {keyframes} from 'styled-components';
import {tada} from 'react-animations'

const Tada = styled.div`
animation: 3s ${keyframes`${tada}`}infinite`;


const Todo = props => {
    return (

    <Tada
        onClick={() => props.toggleItem(props.item.id)}
        className={`item${props.item.completed ? ' completed' : ''}`}
    >
        <p>{props.item.task}</p>
    </Tada>
    
    );
}

export default Todo;