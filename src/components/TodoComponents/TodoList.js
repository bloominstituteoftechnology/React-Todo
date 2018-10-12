import React from 'react';

const TaskContainer =  props => {
    return (
        <div>
        
            <div>
                <h1>Lambda-Lambda-Lambda Todo App!</h1>
                <p>Click on todo to mark as completed.</p>
            
            </div>
            
            <div>
                <ul>
                    {props.todos.tasks.map((singleTask, i) => {
                        return (
                            <li onClick={props.completedTask} key= { i+1 }>{singleTask.task}</li>
                            // <li onClick={props.completedTask} key= { i+1 }>{singleTask.task}</li>
                        )
                    })
                    }
                </ul>
            </div>

        </div>
        )

}

export default TaskContainer; 