import React from "react";

function TodoForm(props) {
    return (
        <form>
            <input 
                value={props.inputText} 
                onChange={props.handleChanges}
                type="text"
                name="todo"
                placeholder="   What else needs to be added?" style={{width: "270px"}} />
            <button className="button" onClick={props.addTodo}>    Add Todo</button>
            <button onClick={props.handleClearTodos}>    Clear Completed Tasks</button>
        </form>
    );
}

export default TodoForm;