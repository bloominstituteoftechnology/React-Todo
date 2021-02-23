import React from "react"

const  Form = (props) =>{

return (
    <form>
        <input
            id='newtask'
            name='task'
            type='text'
            placeholder='Add a new task to the list'
            onChange={props.onInputChange}
            />

        <p>
        <button id='submit' onClick={props.onSubmit} >

        </button>
        </p>
        <p>
          <button id='clear' onClick={props.onClear}></button>

        </p>



    </form>
  
  
 
)

}
export default Form