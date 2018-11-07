import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div className="todo-list-container">
            {props.tasks.map( task => (
                <Todo
                    task={task}
                    key={task.taskName}
                />
                )
            )}
        </div>
    );
};

export default TodoList;