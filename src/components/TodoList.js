// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from '../components/Todo'

export const TodoList = (props) => {

    return(
  <div >
 {props.todoList.map(todo => (
<Todo  onClick={() => props.toggleTodo(todo.id) , console.log("Hello")} todo={todo} key = {todo.id}/> 
))} 
</div>   
       
    )
}

    