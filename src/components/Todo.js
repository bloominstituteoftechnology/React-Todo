import React from 'react';
import { Alert} from 'reactstrap';


const Todo = (props) => {
    return (
        <div
            className="taskItem"
            // className={`${props.completed ? "taskItemDone" : "taskItemStart"}`}
            onClick={() =>props.toggleTask(props.id) }>
            <Alert color='primary'
                    block>
                    <p  className={`${props.completed ? "completed" : "initial"}`}>
                    {props.task}
                    </p>
                </Alert>
            
            
        </div>
    )
}

export default Todo;
            