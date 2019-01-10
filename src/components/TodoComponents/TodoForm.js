import React from "react";

export const TodoForm = (props) =>
   
        <form>
            <input 
                value={props.inputText} 
                onChange={props.handleChanges}
                type="text"
                name="inputText"
                placeholder="   What else needs to be added?" style={{width: "270px"}} />
            <button className="button" onClick={props.addTodo}>    Add Todo</button>
            <button onClick={props.handleClearTodos}>    Clear Completed Tasks</button>
        </form>
   
