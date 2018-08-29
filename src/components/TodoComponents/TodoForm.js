import React from "react";

function ToDoForm(props) {
  return (
    <form>
      <input value={props.toDoInput} onChange={props.handleInput} placeholder="....todo"/>
      <button onClick={props.addToDo} >Add Todo</button>
      <button onClick={props.clear}>Clear All</button>  
    </form>
  );
}

export default ToDoForm;
