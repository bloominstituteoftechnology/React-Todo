import React from 'react'; 

const FormSubmit = (props) =>{
    return(
        <form>
            <input name = "task" onChange = {props.changeHandle} value = {props.task} />
            <button key = {props.id} className = "submit-button" onClick = {props.submitHandle}>Submit Task</button>
        </form>
    )
}



export default FormSubmit;