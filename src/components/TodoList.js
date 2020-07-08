import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';



const TodoList = props => {
    return (
        <div>
            {props.tasks.map(task => {
                <Todo
                    key={props.id}
                    task={props.task}
                />
            })}
        </div>
    )
};

export default TodoList;
