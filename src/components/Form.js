import React from 'react'; 

const Form = (props) =>{
    console.log(props);
    return(
        <div className="form-submit">
            <input name = "todo" onChange = {this.handleChange} value = {props.todo} />
            <button key = {props.id} className = "submit-button" onClick = {this.handleSubmit}>Submit Task</button>
        </div>
    )
}



export default Form;