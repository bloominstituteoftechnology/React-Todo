import React from 'react'


const ToDoForm = (props) => {

    return <div className="toDoForm">
        <input name="input" type="text" placeholder="To Do Item"/>
        <button className="add" onClick={props.submit}>Add ToDo</button>
        <button className="clear">Clear Completed</button>
    </div>

}

export default ToDoForm;