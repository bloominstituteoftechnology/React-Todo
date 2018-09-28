import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = (props) => {

    return (
        <div>
            {props.list.map(item => {
                return (
                    <div key={props.list.key}>
                    <Todo listItem={item.task}/>
                    </div>
                );
            })}
        </div>
    )
};

export default TodoList;