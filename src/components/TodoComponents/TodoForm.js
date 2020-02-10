import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                type="text"
                name="item"
                value={props.value}
                placeholer="...todo"
            
                />
                <button onClick={props.handleAdditem}> Add Todo Item </button>
                <button onClick={props.handleClearItems}> Clear </button>

        </form>
    );
};

export default TodoForm;