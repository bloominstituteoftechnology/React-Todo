import React from 'react';

const TodoForm = props => {
    return(
        <div className='todo-form'>
            <form>
                <input
                onChange={props.handleTaskChange}
                type='text'
                name='todo'
                value={props.value}
                placeholder='add new goal'
               />
               <button onClick={props.handleAddTask}>Add Goal</button>
               <button onClick={props.handleClearTask}>Remove Completed Goal</button>  
            </form>        
        </div>
    );
}


export default TodoForm;

// <form onSubmit={props.addTask}>
//     <input
//         type='text'
//         name='inputText'
//         placeholder='add new task'
//         value={props.inputText}
//         onChange={props.handleChange}
//     />
//     <button type='submit'>Add Task</button>
// </form>     