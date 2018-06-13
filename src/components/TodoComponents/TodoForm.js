import React from 'react';

const TodoForm = (props) => {
    console.log('todo form passed stuff: ', props)
    return (
        <div>
            <input 
                placeholder='Add New Todo' 
             onChange={ props.customChange } value={props.customValue}   
           />
            <button onClick={props.custompropforbutton}>Submit</button>
        </div>    
    )
}
 
export default TodoForm;