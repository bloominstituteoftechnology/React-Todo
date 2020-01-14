import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                // onChange={}
                type="text"
                name="item"
                value={props.value}
                placeholder="...todo"
            />
            <button onClick={props.handleAddItem}>Add Todo Item</button>
            <button onClick={props.handleClearItems}>Clear</button>
        </form>
    );
};

export default TodoForm;