import React from 'react';
import TodoList from './TodoList';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTodo}>
            <h2>Todo List: MVP</h2>
            <TodoList killerList={props.items} />
            <input type="text"
                onChange={props.changeTitleHandler}
                placeHolder="...todo"
                value={props.item} />
            <button onClick={props.addTodo}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;