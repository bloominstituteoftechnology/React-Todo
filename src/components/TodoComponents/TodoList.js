import React from 'react';
import Todo from "./Todo"

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
    return(
        <div>
        {props.todos.map(item =>{
            return (<Todo 
                key= {item.id}
                value = {item.task}
                id ={item.id}
                completed = {props.removeHandler}
            />)
        })}
        </div>
    

    )
}
export default TodoList