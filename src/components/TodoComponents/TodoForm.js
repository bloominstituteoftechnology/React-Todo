import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newTask: ""
        };
    }
    handleChanges = e =>{
        this.setState({ ...this.state, newTask: e.target.value})
    };

    handleSubmit = e =>{
        e.preventDefault();
        this.props.addNewTask(this.state.newTask);
        
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChanges}
                    type="text"
                    name="task"
                    value={this.state.newTask}/>
                <button>Add task</button>
            </form>
        )
    }
}
export default TodoForm;