import React from "react";

const TodoForm = props => {
    console.log(props);
    return(
        <div>
        <input
        type = "text"
        onChange = {props.eventHandler}
        placeholder = "Add todo"
        value = {props.value}
        />
        <button onClick = {props.addTaskEvent}>Add Task</button>
        <button onClick ={props.clear}>Clear Completed </button>
        </div>
    );
};

export default TodoForm;

/* <input
type = "text"
onChange = {this.changeTaskHandler}
placeholder = "Add todo"
value={this.state.tasks}
/>

<button onClick = {this.addTask}>Add Task</button> */