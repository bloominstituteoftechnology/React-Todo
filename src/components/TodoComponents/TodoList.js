// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from './Todo';

 const TodoList = (props) => {


    return (
        <div>
         {props.todos.map (todo => {
             return (
                
                <Todo 
                
                toggle = {props.toggle}
                  todo = {todo}
                  clear= {props.clear}
                  />
             )
         })}

          <button onClick ={props.clear}>Clear Completed</button>



        </div>


    )




}

export default TodoList;