import React from "react";

function ToDoForm(props) {
  return (
    <form>
      <input value={props.toDoInput} onChange={props.handleInput} placeholder={props.placeholder}/>
      <button onClick={props.addToDo} >Add Todo</button>
      <button onClick={props.clear}>Clear Completed</button>  
    </form>
  );
}

export default ToDoForm;
