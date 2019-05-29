import React from 'react';

function Todo(props){
   console.log('Todo.js props', props.task)
    return(
        <div>
            <p>{props.task}</p>
        </div>
    )
};
export default Todo;