import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
    return (
        <div>
            {props.itemList.map(item => (
                <Todo
                    key={item.id}
                    todoItem={item}
                    completedTask = {props.completedTask}
                />
            ))}
        </div>
    );
};


export default TodoList;