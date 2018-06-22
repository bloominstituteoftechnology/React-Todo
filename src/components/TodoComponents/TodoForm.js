import React from "react";

const TodoForm = props => {
    console.log(props)
    // single-responsibility principle: Display a single band.
    return (
    <div className= "todo-form">
      <form>
          <input 
          type="text" 
          name="todo"
          value={props.todo}
          onChange={props.changedInput}
          />
          <button onClick={props.addTodo}>Add Todo</button>
          <button>Clear Complete</button>
      </form>
    </div>
    )
};

  
  export default TodoForm;