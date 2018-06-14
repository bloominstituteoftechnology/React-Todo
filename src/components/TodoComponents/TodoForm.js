import React from "react";
const TodoForm = props => {
    return (<div>
        <input
          type="text"
          onChange={props.passedChanged}
          placeholder="Add Todo"
          value={props.passedValue}
        //   onKeyPress={props.onEnterKeyUp}
        />
        <button onClick={props.onAddClick} >Add</button>
        <button onClick={props.onClearClick}>Clear</button>
        </div>
    )
}
  
//export to todo
  export default TodoForm;