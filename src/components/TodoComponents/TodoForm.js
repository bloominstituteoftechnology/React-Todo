import React from "react";

function ToDoForm(props) {
    return (
        <form>
            <input value={props.inputText} onChange={props.handleInput} />
            <button onClick={props.addItem}>Add Item</button>
            {/* <button onClick={props.toggleCompleted}>Clear Completed</button> */}
        </form>
    );
}
  
export default ToDoForm ;

