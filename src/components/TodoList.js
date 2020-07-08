import React from 'react';
import Todo from './Todo';



const TodoList = props => {
    return (
        <div>
            {props.tasks.map(task => {
                return (
                    <Todo
                        key={task.id}
                        task={task.task}
                    />)
            })}
        </div>
    )
};

export default TodoList;
