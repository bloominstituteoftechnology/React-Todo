import React from 'react'
import './Todo.css'

const Form = props => {
    return (
        <div>
            <form onSubmit={props.handleClickEvent}>
                <input onChange={props.handleChangeEvent} placeholder="...todo" value={props.newTasks} type="text" name="newTasks"/>
                
                <button onClick={props.handleClickEvent} value="submit" type="submit">Add Todo</button>
                
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

export default Form



// onChange={this.handleInputChange} (from after placeholder)