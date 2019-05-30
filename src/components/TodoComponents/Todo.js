import React from 'react';

const Todo = props => {
    return <div className={props.todo.completed ? 'completed': 'todo'} onClick={()=> props.toggleTodo(props.item.id)}>
        {props.todo.task}
    </div>
};

export default Todo;