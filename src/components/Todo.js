// step 3 - the form is set up and rendering on the screen, now I want to see a list of the todos I already have in the todo array
import React from 'react';
import { List } from 'semantic-ui-react'; 

const Todo = (props) => {
    
    return(
        <List.Item
        onClick={() => props.toggleTask(props.item.id)} 
        className={`item${props.item.completed ? " completed" : ""}`}
        >
            <List.Content>
                <List.Description>{props.item.task}</List.Description>
            </List.Content>
        </List.Item>
    );
};

export default Todo; 