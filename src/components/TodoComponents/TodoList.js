import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <ul>
            {props.todoList.map(todoItem => {
                return <Todo 
                    key = { todoItem.id } 
                    id = { todoItem.id } 
                    item = { todoItem } 
                    onItemClick = { props.onItemClick }
                />
            })}
        </ul>
    );
}

export default TodoList;
