import React from 'react';

const TodoForm = (props) => {

    return(
        <div className="todoForm" >

            <input type="text" name="taskinput" className="taskinput" value={props.newTask} onChange={props.handleChange} />
          
            <div className="formButtons" >       
                <button type="submit" className="addButton" onClick={props.submitTask} >
                    Add Task
                </button>

                <button className="clearButton" onClick={props.clearCompleted} >
                    Clear Completed
                </button>
            </div>
        </div>
    );
};

export default TodoForm;