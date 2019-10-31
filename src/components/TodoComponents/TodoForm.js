import React from "react";
import Todo from './Todo';

const TodoForm = (props)=> {



    return (
        <form onSubmit = {props.addTodo}>

            <input 
             type="text"
             onChange={props.onChange}
             value={props.task}
             name="task"
             placeholder="todo"
            
            
            
            
            
            />
            <button type= "submit">ENTER</button>

            <button onClick={props.clear}>CLEAR COMPLETED!</button>
        </form>
    )
}

 







 
export default TodoForm;