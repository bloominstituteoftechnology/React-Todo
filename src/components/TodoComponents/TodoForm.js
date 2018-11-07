import React from "react"
import './Todo.css'

const TodoForm = props => {
  
    return (
      <div className="iandb">
        <input placeholder="Enter Task Here" value={props.value} onChange={props.update} />
        <button onClick={props.submit}>Add Item</button>
        <button onClick={props.clear}>Clear Completed</button>
      </div>
    );
  }

export default TodoForm