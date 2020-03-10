// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const Button = styled.button`
background-color: aqua;
width: 200px;`

const ToDoList = props => {
    return (
        <div>
            {props.toDo.map(item =>(
                <Todo key={item.id}
                item={item}
                toggleToDo={props.toggleToDo}/>
            ))}
            <Button onCLick={props.clearTask}>Clear Completed</Button>
        </div>
    )
}

export default ToDoList;