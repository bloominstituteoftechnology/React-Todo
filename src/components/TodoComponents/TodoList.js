// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
import React from "react";
import Todo from "./Todo";
//import Todo from "./Todo";
 const TodoList = (props) => {
    console.log("list", props)
    //for (var in key )
    return(
        <div className={props.displayStyle}>
            <TodoForm action={props}/>
        </div>
    );
}
 export default TodoList;