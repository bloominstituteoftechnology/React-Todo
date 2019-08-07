// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from "./Todo.js"
// import TodoForm from "./TodoForm.js"

  const TodoList = props => {
    return(
        <div>
            {props.todo.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} /> 
            ))}
            
         </div> 
    )
}

export default TodoList; 





