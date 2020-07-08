import React from 'react';
import Todo from './Todo';



const TodoList = props => {
    return (
        <div>
            {props.tasks.map(task => {
                return (
                    <Todo
                        key={props.id}
                        task={props.task}
                    />)
            })}
        </div>
    )
};

export default TodoList;
