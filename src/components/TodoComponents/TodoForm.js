import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            newtask: ''
        };
    }

    handleChanges = e =>{
        this.setState({newtask: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.Addtask(this.state.newtask);

        this.setState({
            newtask: ''
        });
    };

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input
                    value = {this.state.newtask}
                    onChange = {this.handleChanges}
                    type = 'text'
                    name = 'tasks'
                />
                <button>Add Task </button>

            </form>
        )
    }
}

export default TodoForm;