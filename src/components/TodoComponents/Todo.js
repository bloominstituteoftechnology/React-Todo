import React from 'react';

const Todo = props => {
    return(
        <div key={props.todoList.id}>
            <p>{props.todoList.id}</p>
            <p>{props.todoList.task}</p>
        </div>
    );
}

export default Todo;