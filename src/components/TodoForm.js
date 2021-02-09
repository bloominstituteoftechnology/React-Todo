import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newTask:"",
        }
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState({
          newTask: e.target.value,
        })
      };

    onSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask)
        this.setState({
            newTask: "",
        })
    }

    render(){
        return (

            <form onSubmit={this.onSubmit}>
                <input type="text" name="task" value={this.state.newTask} onChange={this.handleChanges} placeholder="Add a new Todo"/>
                <button>Add new Todo</button>
                <button onClick={this.props.clearTask}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;