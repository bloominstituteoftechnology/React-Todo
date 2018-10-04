import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addNewListItem} className="todoForm">
        <label htmlFor="textInput" className="textInputLabel">Todo List</label>
            <input
                type="text"
                placeholder="...todo"
                onChange={props.changeHandler}
                value={props.newListItem}
                name="newListItem"
                id="textInput"
            /> {/* text input for new task */}
            <button type="submit">Add task</button> {/* submit button to add new task to list */}
            <button onClick={props.clearCompleted}>Clear completed tasks</button> {/* clears all Todo tasks marked completed */}
        </form>
    );
}

export default TodoForm;