import React from "react";

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state ={
            taskName: ""
        }
    }
    
    handleChanges = e => {
        this.setState({ taskName: e.target.value});
        console.log(this.state.taskName);
    };

    handleSubmit = e => {
        this.props.addTask(e, this.state.taskName);
        this.setState({ taskName: ""});
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="item"
                    value={this.state.taskName}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;