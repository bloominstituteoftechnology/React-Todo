import React from "react";
//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

class TodoForm extends React.Component{
render(){
    return(
        <form>
            <label>Add Task:
                <input onChange={this.props.handleInput} type="text"></input>
            </label>
            <button onClick={this.props.addTask}>Submit Task</button>
            <button onClick={this.props.clearFinished}>Clear Finished Task</button>
        </form>
    )
}
}
export default TodoForm;