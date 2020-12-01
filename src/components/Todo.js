import React from 'react';
import styled from 'styled-components';

const Todo = props => {
    const handleClick = () => {
        props.toggleComplete(props.item);
    }

    return(
        <MainContain onClick={handleClick} className={`${props.item.completed ? 'completed' : 'item'}`} >
            <p>{props.item.task}</p>
        </MainContain>
    )
}

export default Todo;
const MainContain = styled.div`
height: 50px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin: 5px 0;
`