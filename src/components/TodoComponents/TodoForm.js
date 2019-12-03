import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const ToDoForm = props => {
    return(
        <form>
            <TextField 
                onChange={props.handleToDoChange}
                type="text"
                name="toDo"
                value={props.value}
                placeholder="ToDo..."
            />
            <Button onClick={props.handleAddToDo}>Create a ToDo</Button>
            <Button className="clear-btn" onClick={props.handleClearToDos}>Clear Completed Task</Button>
        </form>
    )
};

export default ToDoForm;