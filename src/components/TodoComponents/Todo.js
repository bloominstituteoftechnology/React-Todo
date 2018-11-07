import React from 'react';

function Todo(props){
    return (
        <div>
            {props.todoTask.task}
        </div>
    );
}

export default Todo;