import React from 'react';


function TodoForm(props) {
    return (
      <form>
        <div className = 'form-holder'>
        <input  className = 'input-box'
        value={props.task} 
        onChange={props.handleInputChange} 
        placeholder="...todo"
        type="text"
        name="todo"
        />
        </div>
        <div className = "buttons">
        <button className = "btn-hover color-1" onClick={props.handleAddTodo}>Add Todo</button>
        <button className = "btn-hover color-4" onClick={props.handleClearCompleted}>Clear Completed</button>
        </div>
      </form>
    );
  };
  
  export default TodoForm;