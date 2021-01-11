import React from 'react'

const Form= (props) =>{

    return(
        <form>
            <input 
            id= 'newTask'
            onChange = {props.onInputChange}
            name = 'task'
            type = 'text'
            placeholder = 'Add a atsk to do'
             />
        
        <p>
            <button id = 'submit' onClick = {props.onSubmit}> Add a task</button>

        </p>
      
        <p>
            <button id = 'clear' onClick = {props.onClear}> Clear Completed</button>
        
        </p>
        
        </form>
    )

}

export default Form;