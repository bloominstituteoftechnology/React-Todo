import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addNewListItem}>
                <input
                type="text"
                name="newTodo"
                onChange={props.changeHandler}
                value={props.newTodo}
                />
                <button type="submit" onClick={props.addNewListItem}>
                Add Todo
                </button>
            </form>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    );
    };

export default TodoForm;
