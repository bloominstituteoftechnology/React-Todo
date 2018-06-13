import React from 'react';
import './Todo.css';

const TodoList = props => {
    return (
        <div>
            {props.toDoList.map(list => {
                if (list.task === '') {
                    return;
                }
                return <div className='todo-list'
                    style={list.completed ? { textDecoration: 'line-through' } : undefined}
                    onClick={() => props.toggleCompleted(list.id)}
                    key={Math.random()}>
                    {list.task}
                </div>;
            })}
        </div>
    );
};


export default TodoList;