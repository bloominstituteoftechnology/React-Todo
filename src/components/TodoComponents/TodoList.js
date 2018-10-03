import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
    return (
        <div className="todo-list">
        {props.item.map(item => {
            return <Todo
                key={item.id}
                id={item.id}
                task={item.task}
                onClick={props.toggleComplete}/>
            })}
        </div>
    );
}

export default TodoList;
