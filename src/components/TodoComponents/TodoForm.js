import React from "react"

const TodoForm = props => {
  
    return (
      <div>
        <input value={props.value} onChange={props.update} />
        <button onClick={props.submit}>Add Item</button>
        <button onClick={props.clear}>Clear Completed</button>
      </div>
    );
  }

export default TodoForm