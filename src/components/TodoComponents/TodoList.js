// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

//todo has a display style that is not formatted yet
//displays an h1 then maps through prop.values to create new todo components for each item in the array
//calls todoform to display the user buttons
const TodoList = (props) => {
    console.log(props)
    return(
        <div className={props.displayStyle}>
            <h1>Todo List: MVP</h1>
            <div className='list'>
                {props.values.map(item => {
                return (
                    <Todo key={item.id} id={item.id} task={item.task} completed={item.completed} onClick={props.strike}>
                    </Todo>
                );
                })}
            </div>
            <TodoForm action={props}/>
        </div>
    );
}

export default TodoList;