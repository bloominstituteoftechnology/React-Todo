import React from 'react';
import './Todo.css';

const TodoList = (props) => {
    return (
        <div className="todolist">
            {props.todoList.map(item => {
                return (
                    <div className='listItem'>
                        <p onClick={props.itemStrike}>{item}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default TodoList;
