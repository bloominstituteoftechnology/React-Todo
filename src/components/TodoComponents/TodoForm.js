import React from 'react';

const TodoForm = (props) => {
    console.log('todo form passed stuff: ', props)
    return (
        <div>
            <input 
                placeholder='Add New Todo' 
             onChange={ props.customChange } value={props.customValue}   
           />
            <button onClick={props.customPropForSubmit}>Submit</button>
            <button onClick={props.customClear}>Clear Completed</button>
        </div>    
    )
}
 
export default TodoForm;