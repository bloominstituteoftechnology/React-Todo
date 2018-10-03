import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addNewListItem}>
            <input
                type="text"
                placeholder="...todo"
                onChange={props.changeHandler}
                value={props.newListItem}
                name="newListItem"
            />
            <button type="submit">Add to list</button>
            <button>Clear completed</button>
        </form>
    );
}

export default TodoForm;