// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const TodoList = props => {
    return(
        <div>
            {props.list.map(item => (<Todo key={item.key} item={item} id={item.id} toggleComplete={props.toggleComplete} />))
            }
            <Button onClick={props.handleCompleted} >Clear Completed</Button>
        </div>
    )
}

export default TodoList;

const Button = styled.button`
margin-top: 15px;
`