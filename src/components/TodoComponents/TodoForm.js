import React from "react";
const TodoForm = props => {
    return (<div>
        <input
            type="text"
            onChange={props.passedChanged}
            placeholder="Add Todo"
            value={props.passedValue}
        />
        <button onClick={props.onAddClick} >Add</button>
        <button onClick={props.onClearClick}>Clear</button>
    </div>
    )
}

//export to todo
export default TodoForm;