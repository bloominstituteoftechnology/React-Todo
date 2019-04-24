import React from 'react'



const TodoForm = (props) =>{

    return (
        <form>
        <input  onChange={props.textChange} type="text" placeholder="change me" value={props.info.task} name="task" ></input>
        <button onClick={props.enterItem}>Click me to enter todo item</button>
        <button onClick={props.emptyList}>Click me to empty List</button>
        
        </form>
    )
}

export default TodoForm

