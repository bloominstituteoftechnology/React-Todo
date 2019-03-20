import React from 'react';




const TodoForm = (props) => {
    console.log(props)
    return (
        <div className="Todo-Form">
            <form>
                <input 
                type="text" 
                name="inputText"
                />
                <button onClick={props.submitHandler}>Add</button>
                <button>Clear</button>
            </form>
        </div>
    )
}
export default TodoForm;
