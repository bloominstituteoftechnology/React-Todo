import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <div className="todo-form">
        <div className="input">
          <input type="text" value={props.input} onKeyDown={props.keypressHandler} onChange={props.changeHandler} />
        </div>
        <div className="buttons">
          <button type="submit" className="button"onClick={props.submitHandler}>
            Add Task
          </button>
          <button className="button" onClick={props.clearHandler}>
            Clear Completed
          </button>
        </div>
      </div>
    )
}
export default TodoForm