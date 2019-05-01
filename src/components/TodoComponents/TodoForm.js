import React from 'react';

function ToDoForm(props){
    return (
        <form className="to-do-form">
          <input 
            className="to-do-input"
            value={props.task}
            placeholder="...to do"
            onChange={props.handleInputChange} 
          />

          <button onClick={props.handleClickEvent}>Add To Do</button>

          <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default ToDoForm;