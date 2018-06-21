import React from 'react';


const TodoForm= props => {
    return (
        <div>
            <input
                type="text"
                placeholder="add item"
                name="item"
                onChange={props.changeToDoHandler}
                value={props.item}
            /> 

            <button onClick={props.addItem}>Add Item</button>
            <button onClick={props.clearItem}>Clear Item</button>
        </div>
    );
};

export default TodoForm;