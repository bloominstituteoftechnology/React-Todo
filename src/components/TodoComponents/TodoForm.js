import React from 'react'

const TodoForm = (props) =>{
    
    return(
        <form>
            <input
            onChange ={props.onChange}
            text="type"
            name= "todo"
            value= {props.value}
            placeholder = "add new todo" />
            <button onClick={props.addTodo}>Add</button>
            <button onClick={props.ClearTodo}> Clear</button>
        </form>
    )
    
}
export default TodoForm
