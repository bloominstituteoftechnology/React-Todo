import React from "react";

import "./Todo.css"

                            //Passed as props from App.js
                        //value = { this.state.todo }
                        //handleUpdateTask = { this.updateTodoTask }
                        //handleAddNew = { this.addNewObject }
                        //removeItem = { this.removeItem }

const ToDoForm = props => {
 
    return(
        <form className="inputForm">
            <input 
                onChange = { props.handleUpdateTask }
                type = "text"
                name = "todo"
                value = { props.value }
                placeholder = "Add a task..."
            />
            <br />
            <button className="btn btn1" onClick = { props.handleAddNew }>Add it!</button>

            <button className="btn" onClick = { props.removeItem }>Outta Here</button>
        </form>
    )
}

export default ToDoForm;