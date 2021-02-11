import React from 'react';
import Todo from './Todo';
import { ListContainer, Button } from './Styles';

const TodoList = props => {
    return(
        <ListContainer>

            {props.tasks.map(task => (
                <Todo 
                    toggleCompleted={props.toggleCompleted}
                    key={task.id}
                    task={task} />
            ))}

            <Button onClick={() => props.clearCompleted()}>
                Clear Completed
            </Button>

        </ListContainer>
    )
}

export default TodoList
