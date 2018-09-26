import React from 'react';




const TodoForm = (props) => {

return (
     <div>
      <input type="text" className='input' onClick={props.newTodo}/> <button className={props.newTodo} onClick={props.clickHandler}>Add Todo</button> <button>Clear Completed</button> 
    </div>
     );
}




export default TodoForm;


