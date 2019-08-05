// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from "./Todo.js"
import TodoForm from "./TodoForm.js"

  const TodoList = props => {
    return(
        <div>
            {props.todoItem.map(item => (
                <Todo key={item.id} item={item} /> 
            ))}
            <div>
            {/* <TodoForm addToDo={props.addToDo} />  */}
             </div> 
         </div> 
    )
}

export default TodoList; 





