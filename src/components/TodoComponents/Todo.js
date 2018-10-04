import React from 'react';

const Todo = props => {
    return (
        <p onClick={() => props.selectedTask(props.taskIndex)} className={props.task.completed ? 'selectedTodoItem' : ''}>{props.task.task}</p>
    );
}

export default Todo;