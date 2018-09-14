import React from 'react'; 

const Form = (props) =>{
    return(
        <div>
            <input name = "todo" onChange = {props.changeHandle} value = {props.todo} />
            <button key = {props.id} className = "submit-button" onClick = {props.submitHandle}>Submit Task</button>
        </div>
    )
}



export default Form;