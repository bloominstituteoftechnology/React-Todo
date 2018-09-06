import React from 'react';
import './Todo.css'

function TodoForm(props) {
   


        return (
        
    <form>
        <input onChange={props.handleInput} type="text" placeholder='...todo' value={props.inputText}  />
    
        <input onClick={props.addTask} type="submit" value="Add Todo" />
        <input onClick='' type="submit" value="Clear Completed" />
    </form>
        );
    
}
 
export default TodoForm;