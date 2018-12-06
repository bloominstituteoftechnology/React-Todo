import React from "react";

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
                placeholder = "Add something to your list"
            />

            <button onClick = { props.handleAddNew }>Add it!</button>

            <button>Outta Here</button>
        </form>
    )
}

export default ToDoForm;