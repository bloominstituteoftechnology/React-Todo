import React from 'react';

const Todo = props => {
    return(
        <div>
            <h1 key={"name"}>{props.todoList}</h1>
        </div>
    );
}

export default Todo;