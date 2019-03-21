import React from 'react';
import './Todo.css';


const Form = props => {
    return (
        <div class="formStyle">
        <form> 
            <input
                type="text"
                value={props.id}
                name="task"
                placeholder="Task"
                onChange={props.handleChanges} 
                
                
                />
                <button onClick={props.updateList}>Add Task</button>
                <button class="delete" onClick={props.deleteCompleted}>Delete Complete</button>

        </form>
        </div>
    );
};

export default Form;