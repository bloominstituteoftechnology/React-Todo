import React from "react"

function Todo(props) {
    const completedStyle = {
        fontStyle: 'italic',
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
             <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
            
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.toggleComplete(props.item.id)}
            />
            
           
        </div>
    )
}

export default Todo;