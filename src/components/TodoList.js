import React from 'react';

import Todo from './Todo';

const TodoList = props => {

    return (
        <div className="todolist" >
            {props.todo.map(task => (
                <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
            ))}
        </div>
    );
};

export default TodoList;