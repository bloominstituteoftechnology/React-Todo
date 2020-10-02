import React from 'react';

const TodoForm = (props) => {

    return(
        <div>
            <form onSubmit={props.submitTask} >

                <input type="text" name="task" value={props.newTask} onChange={props.handleChange} />
                    
                <button className="addButton" >
                    Add Task
                </button>

                <button className="clearButton" onClick={props.clearCompleted} >
                Clear Completed
                </button>

            </form>
        </div>
    );
};

export default TodoForm;