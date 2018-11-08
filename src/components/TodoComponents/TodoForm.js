import React from 'react';
 const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addListItem}>
                <input type="text" name="inputText" 
                placeholder="add new list item" value={props.inputText}
                onChange={props.handleChange} />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}
 export default TodoForm; 