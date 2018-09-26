// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = (props) => {
    //console.log("list", props)
    console.log("list", props.state)
    console.log(typeof props)
    for(let i=0; i < props.state.length; i++) {
        props.state.map((item) => {
            console.log(item.task)
            return (
                <div key={item.id}>
                    <Todo todo={item.task}/>
                </div>
            )
        })
    }
    return(
        <div className={props.displayStyle}>
            <h1>Todo List: MVP</h1>
            {/* <div key={props.state}>
                <Todo todo={props}/>
            </div> */}
            <TodoForm action={props}/>
        </div>
    );
}

export default TodoList;