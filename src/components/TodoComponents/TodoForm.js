import React from 'react';

function ToDoForm(props) {
    return (
        <form onSubmit={props.addNewItem}>
            <input
             value={props.toDoItem}
             
             type="text"
             name="toDoItem"
             placeholder="New To-Do Item"
             onChange={props.handleChanges}
            />
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ToDoForm;