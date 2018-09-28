//will hold your input field and your Add Todo and Clear Completed buttons.
import React from "react";
const TodoForm = (props) => {
   console.log("form", props)
   return (
       <div className="form-container">
         <h1>Todo List: MVP</h1>
         <input onChange={props.handleInput} />
         <button onClick={props.addTodo}>Add Todo</button>
         <button onClick={props.removeCompleted}>Clear Completed</button>
     </div>
     );
}
export default TodoForm;tons.