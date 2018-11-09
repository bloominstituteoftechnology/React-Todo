// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const TodoList = props => {
    return (
        <div>
           {props.todos.map(item => {
               return <h4 className={props.class}>{item.todo}</h4>
           })}


        <div>

            <form onSubmit={props.addNewTask}>

           <input
             type="text"
             name="newTask"  
             placeholder="...todo" 
             value={props.newTask}
             onChange={props.changeHandler}
           />  

           </form>

        </div>   
           
        
        <button type="submit" onClick={props.addNewTask}>Add Todo</button>
        <button>Clear Completed</button>







        </div>
    );
}

export default TodoList;