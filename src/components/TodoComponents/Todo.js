import React from 'react';



const Todo = props => {
    
    return(
        <div>
            {props.todos.task}
        </div>
    );   
};


export default Todo;