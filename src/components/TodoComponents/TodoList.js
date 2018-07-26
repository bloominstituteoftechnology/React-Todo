import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            <div className="titleHolder">Retro Todo List</div>
            <div className="todo-items">
                {props.todoArr.map(item => {
                    return (
                        <Todo key={item.id} unique={item.id} name={item.task} onClick={props.onItemClick} />
                    );
                })}
            </div>
        </div>
    );
};

export default TodoList;