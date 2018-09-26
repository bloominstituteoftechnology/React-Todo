import React from 'react';

 const TodoForm = (props) => {
    return (
        <form>
            <input type = 'text' value = {props.inputText} onChange = {props.updateInput}/>
            
            <button className= 'add-item' onClick = {props.updateTodo}>Add Item</button>
            <button className = 'clear-completed'>Clear Completed</button>
        </form>
     );
}
 export default TodoForm;