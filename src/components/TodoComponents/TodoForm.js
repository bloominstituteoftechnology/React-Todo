import React from "react";

const TodoForm = props => (
  <form>
    <input  type="text" 
            placeholder="...todo" 
            onKeyDown={props.addFromInput}
            onChange={props.saveInput}
            value={props.current}/>
    <button onClick={props.addFromBtn}>Add ToDo</button>
    <button onCLick={props.removeCompleted}>Clear Completed</button>
  </form>
);
export default TodoForm;
