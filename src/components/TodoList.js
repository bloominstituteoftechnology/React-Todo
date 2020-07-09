import React from 'react';
import Todo from './Todo';



const TodoList = props => {
    return (
        <div>
            {props.tasks.map(task => {
                return (
                    <Todo toggleCompleted={props.toggleCompleted}
                        key={task.id}
                        id={task.id}
                        task={task.task}
                        completed={task.completed}
                    />)
            })}
        </div>
    )
};

export default TodoList;
