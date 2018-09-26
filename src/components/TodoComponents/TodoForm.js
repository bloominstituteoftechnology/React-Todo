import React from 'react';


const TodoForm = (props)=>{
return(


<div className='App'>
      
        
        <form>
        
          <input onChange={props.inputHandler} value={props.holder} />
          <button onClick={props.clickHandler} className="todo">Add Todo</button>
          <button className='Completed'>Clear Completed</button>
       
        </form>
        </div>
        )
        }

        export default TodoForm;