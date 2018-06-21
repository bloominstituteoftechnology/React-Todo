import React from "react";

const TodoForm = props => {
    // single-responsibility principle: Display a single band.
    return (
    <div className= "todo-form">
      <form>
          <input 
          type="text" 
          name="Todo"
          value={props.inputTodos}
          onChange={props.typedInput}
          />
          <button>Add Todo</button>
          <button>Clear Complete</button>
      </form>
    </div>
    )
};

  
  export default TodoForm;