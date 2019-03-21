import React from 'react';




const TodoForm = (props) => {
    
    return (
        <div className="Todo-Form">
            <form>
                <input
                onChange={props.handle}
                type="text" 
                name="inputText"
                
                value={props.value}
                />
                <button onClick={props.submit}>Add</button>
                <button onClick={props.clearTodos}>Clear</button>
            </form>
        </div>
    )
}
export default TodoForm;
