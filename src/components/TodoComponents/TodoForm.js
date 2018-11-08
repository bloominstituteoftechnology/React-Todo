import React from 'react';
import './Todo.css'


const TodoForm = props => {
    return (
        <div class="form">
            <form onSubmit={props.addItem}>
                <div class="input">
                    <input
                        type="text"
                        name="inputText"
                        placeholder="add new todo item"
                        value={props.inputText}
                        onChange={props.handleChange}
                        />
                </div>    
                <div class="add-btn">
                    <button type="submit">Add Item</button>
                </div>  
                <div class="clear-btn">
                    <button onClick={props.clearCompleted}>Clear Completed Items</button>
                </div> 
            </form>
                
        </div>
    )
};

export default TodoForm;