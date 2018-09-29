
import React from 'react';
import './Todo.css';


const ToDoForm = (props)=>{
    return(
        <div className='toDoForm'>    
            <form>
                <input onChange={props.inputHandler} value={props.holder} />
                <button onClick={props.clickHandler} className="addButton">Add</button>
                <button onClick={props.filters} className='removebutton'>Remove</button>
       
            </form>
        </div>
    )
}

      
export default ToDoForm;