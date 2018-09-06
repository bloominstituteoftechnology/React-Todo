import React, { Component } from 'react';
import './Todo.css'

function TodoForm(props) {
   






    
        //alert(this.state.value);

        return (
        
    <form>
        <input onChange={props.handleNewTask} type="text" placeholder='...todo' value={props.todoList}  />
    
        <input onSubmit='' type="submit" value="Add Todo" />
        <input onSubmit='' type="submit" value="Clear Completed" />
    </form>
        );
    
}
 
export default TodoForm;