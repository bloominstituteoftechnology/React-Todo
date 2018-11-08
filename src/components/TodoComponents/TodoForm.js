import React from 'react';


const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addItem}>
            <input
                type="text"
                name="inputText"
                placeholder="add new todo item"
                value={props.inputText}
                onChange={props.handleChange}
                />
                
                <button type="submit">Add Item</button>
                <button onClick={props.clearCompleted}>Clear Completed Items</button>
            </form>
                
        </div>
    )
};

export default TodoForm;