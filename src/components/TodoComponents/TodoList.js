import React from 'react';

const TodoList = (props) => {
    return (
        <div className="todolist">
            {props.todoList.map(item => {
                return (
                    <p>{item}</p>
                );
            })}
        </div>
    )
}

export default TodoList;
