import React from 'react';

function TodoForm(props) {
    return(
        <form>
            <input value={props.textField}  onChange={props.handleNewItem} />
            <button onClick={props.addItem}>Add Item</button>
            <button onClick={props.clearCompleted} >Clear Completed</button>
            <button onClick={props.deleteItem}>Clear All</button>
        </form>
    );
};


export default TodoForm;