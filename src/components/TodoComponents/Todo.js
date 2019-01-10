import React from 'react';

function Todo (props) {
    const { toggleCompleted, todo } = props;
    const completedStyle = {
        fontStyle: "italic",
        color:"#cdcdcd",
        textDecoration: "line-through",
    };
    return (
       
        <div className="todo-item" onClick = {props.todoClickFunction}>
            <input type="checkbox"
            checked={props.todo.completed}
            onChange={e=> toggleCompleted(todo.id)}/>            
        
            <p className= {todo.completed ? 'completed' : null} 
                style= {props.todo.completed ? completedStyle : null}
                 onClick= {e => toggleCompleted(todo.id)}>

             {todo.task}
             </p>
    
        </div>
    )
}

export default Todo;