import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(todo => (
                <Todo key ={todo.id} listTodo={todo} />
            ))}
        </div>
    );
};

export default TodoList;