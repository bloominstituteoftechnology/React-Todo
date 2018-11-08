import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div className="todo-list-container">
            {props.tasks.map( task => (
                <Todo
                    key={task.id}
                    task={task}
                    completeTask={props.completeTask}
                />
                )
            )}
        </div>
    );
};

export default TodoList;