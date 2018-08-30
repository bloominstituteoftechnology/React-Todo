import React from 'react';


const Todo = (props) => {
    return (
    <div onClick={props.toggleCompleted(props.todo.task)}>
    </div>
    );
};

export default Todo;