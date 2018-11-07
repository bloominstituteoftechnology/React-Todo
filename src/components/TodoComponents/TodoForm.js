import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addItem}>
            <input 
               type='text'
               name= "inputText"
               placeholder = "Add New Item"
               value= {props.inputText}
               onChange={props.handleChange} />
             <button type = "submit">Add Item</button>
             <button type = "submit">Clear Completed</button>
            </form>
        </div>
    );
};

export default TodoForm;