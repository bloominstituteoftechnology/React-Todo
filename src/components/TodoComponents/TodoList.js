import React from 'react';

const TaskContainer =  props => {
    return (
        <div>
        
            <div>
                <h1>Lambda-Lambda-Lambda Todo App!</h1>
            
            </div>
            
            <div>
                <ul>
                    {props.tasksProp.tasks.map((singleTask, i) => {
                        return (
                            <li key= { i++ }>{singleTask.task}</li>
                        )
                    })
                    }
                </ul>
            </div>

        </div>
        )

}

export default TaskContainer; 