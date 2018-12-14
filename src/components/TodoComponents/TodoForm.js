import React from "react";

 const TodoForm = props => {

    return (
        
        <form>

            <input
              onChange = {props.changeHandler}
              type = "text"
              name = "todo"
              value = {props.value}
              placeholder = "what To-do?"
            />
      
        <button onClick = {props.addHandler}>Add To-do</button>
      
        <button onClick = {props.clearHandler}>Clear To-do</button>
      
        </form>
      );

      }
   
 export default TodoForm; 