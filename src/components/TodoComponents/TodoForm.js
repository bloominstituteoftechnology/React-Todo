import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form>
            <input
                type="text"
                name="inputText"
                placeholder="Add New Item"
                value={props.inputText} // {props.inputText} is coming from state object. It is going to pass via CharacterForm in the render();
                onChange={props.handleChange}
            />
            <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default TodoForm;