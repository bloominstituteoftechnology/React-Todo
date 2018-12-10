import React from 'react';

const Todo = props => {
   
    return (
        <div>
            <h3 onClick={()=> props.handleToggleComplete(props.todoProp.id)}>{props.todoProp.task}</h3>
        </div>
    );
}

export default Todo;