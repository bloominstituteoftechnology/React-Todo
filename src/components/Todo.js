import React from 'react';
import { TodoContainer } from './Styles';

const Todo = props => {
    console.log(props);
    return(
        <TodoContainer
            className={`task${props.task.completed ? ' completed' : ''}`}
            onClick={() => props.toggleCompleted(props.task.id)} >
                <p>{props.task.name}</p>
        </TodoContainer>
    )
}

export default Todo