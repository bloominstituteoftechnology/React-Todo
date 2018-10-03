import React from "react";

const TodoForm = props => {
    return (
       <form>
            <input type="text" placeholder="Add Todo Item" onChange={props.change}></input>
            <button className="button-add" onClick={props.submit}>Add Todo</button>
            <button className="button-remove" onClick={props.remove}>Clear Completed</button>
       </form>
    )
};

export default TodoForm;
