import React from 'react'
import './Todo.css'

const Form = props => {
    return (
        <div>
            <form onSubmit={props.addTask}>
                <input 
                    onChange={props.handleChangeEvent}
                    placeholder="...todo"
                    value={props.newTasks}
                    type="text"
                    name="newTasks"/>
                
                <button 
                    onClick={props.addTask}
                    value="submit"
                    type="submit"
                    name="buttonOne"
                >Add Todo</button>
                
                <button
                    onClick={props.clearCompletedTasks}
                >Clear Completed</button>
            </form>
        </div>
    )
}

export default Form



// onChange={this.handleInputChange} (from after placeholder)