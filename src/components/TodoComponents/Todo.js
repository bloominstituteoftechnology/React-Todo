import React from "react"; 
import "./Todo.css";

const Todo = props => {
    console.log(props)
    return(
        <div 
        // className={props.item.completed === true? "itemcompleted" : "" }
       className={`item${props.item.completed && "completed" }`}
        onClick={() => props.toggleItem(props.item.id)}   
        >
         <p> {props.item.task} </p>  
        
        </div>
    )
}

export default Todo; 