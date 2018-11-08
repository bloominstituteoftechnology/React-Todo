import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            <h2>Your ToDo List</h2>
            <p>Click on a task to mark as complete</p>
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
        </div>
    );
};

export default TodoList;