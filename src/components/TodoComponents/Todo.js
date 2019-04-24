import React from 'react';


const Todo = props => {
    return (
        <React.Fragment>
            <div>
            <h3>
                <strong>Will you please</strong> {props.todoTask.task} 
            </h3>
            </div>
            
        </React.Fragment>
    )
}

export default Todo