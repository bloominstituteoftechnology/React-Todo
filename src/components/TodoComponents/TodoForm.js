import React from "react";

const TodoForm = props => {
    return (
        <form className = 'task-form'>
        <input type = 'text' name = 'todo' placeholder = 'Enter a new task' value = {props.value} onChange = {props.handleInput} />
        <button className = 'add-task-btn' onClick = {props.addTask}>Add Task</button>
        {/* <button className = 'clear-task-btn' onClick = {props.clearTask}>Clear Tasks</button> */}
        </form>
    );
};

// function TodoForm(props){
//     return (
//         <form>
//         <input value={props.input} onChange={props.handleInput} />
//         <button onClick={props.addTodo}>Add Todo</button>
//         <button onClick={props.clearList}>Clear List</button>
//         </form>
//     );
// }

export default TodoForm;