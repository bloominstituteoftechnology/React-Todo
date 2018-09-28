import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = (props) => {

    return (
        <div className="todolist-container">
            {props.list.map(item => {
                return (
                    <div key={props.list.key}>
                        <p><Todo listItem={item.task} /></p>
                    </div>
                );
            })}
        </div>
    )
};

export default TodoList;