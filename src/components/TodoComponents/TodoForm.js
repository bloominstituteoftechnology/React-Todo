import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form>
            <input
                type="text"
                name="inputItem"
                placeholder="Add New Item"
                value={props.inputItem} 
                onChange={props.handleChange}
            />
            <button type="submit" onClick={props.addItem}>Add Item</button>
            <button type="submit" onClick={props.completedItems}>Clear Completed</button>
            </form>
        </div>
    );
};

export default TodoForm;