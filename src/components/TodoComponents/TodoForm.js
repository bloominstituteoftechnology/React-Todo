import React from 'react'
import "./Todo.css"

const TodoForm = (props) =>{
    
    return(
        <form>
            <input className = "input"
            onChange ={props.onChange}
            text="type"
            name= "todo"
            value= {props.value}
            placeholder = "add new todo" />
            <button className ="form-btn"onClick={props.addTodo}>Add</button>
            
        </form>
    )
    
}
export default TodoForm
