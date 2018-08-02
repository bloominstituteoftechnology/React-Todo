import React from 'react';

const TodoForm = (props) => {


    return (
        <div>
            <form onSubmit={props.submitNewTask}>
                <input 
                    placeholder="...todo" 
                    value={props.inputVal}
                    onChange={props.updateInputVal}
                 />
                
                    <button>Add Todo</button>
                    <button>Clear Completed</button>
                
            </form>
        </div>
    )
}

export default TodoForm;