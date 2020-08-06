import React from 'react'; 
import Todo from './Todo'; 
import { Button, List, Icon } from 'semantic-ui-react'; 

const TodoList = (props) => {
    return(
        <List animated verticalAlign='middle'>
            {props.todos.map(todo => (
                <Todo 
                key={todo.id} 
                item={todo}
                toggleTask={props.toggleTask}
                />
            ))}
            <Button animated onClick={props.handleRemove}>
                <Button.Content visible>Clear Completed</Button.Content>
                <Button.Content hidden>
                    <Icon name="arrow right" />
                </Button.Content>
            </Button>
            </List> 
    );
};

export default TodoList; 

