// step 3 - the form is set up and rendering on the screen, now I want to see a list of the todos I already have in the todo array
import React from 'react';

const Todo = (props) => {
    
    return(
        <div
        onClick={() => props.toggleTask(props.item.id)} 
        className={`item${props.item.completed ? " completed" : ""}`}
        >
            <p>{props.item.task}</p>
        </div>
    );
};

export default Todo; 