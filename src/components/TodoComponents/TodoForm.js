import React from "react";

import "./Todo.css"

                            //Passed as props from App.js
                        //value = { this.state.todo }
                        //handleUpdateTask = { this.updateTodoTask }
                        //handleAddNew = { this.addNewObject }

const ToDoForm = props => {
 
    return(
        <form>
            <input 
                onChange = { props.handleUpdateTask }
                type = "text"
                name = "todo"
                value = { props.value }
                placeholder = "Add a task..."
            />

            <button onClick = { props.handleAddNew }>Add it!</button>

            <button>Outta Here</button>
        </form>
    )
}

export default ToDoForm;