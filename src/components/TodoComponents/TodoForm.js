import React from 'react';
import TodoList from './TodoList';

const TodoForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <TodoList items={props.listItems} />
            <input
                type="text"
                onChange={props.handleChange}
                placeHolder="...todo"
                value={props.item}
            />
            <button type="submit">Add Todo</button>
            <button onClick={props.handleClear}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;