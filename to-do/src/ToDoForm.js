import React from 'react'

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    };

    handleChanges = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    };

    submitTask = (e) => {
        e.preventDefault();
        this.setState({ task: ''});
        this.props.addTask(e, this.state.task);
        console.log("Task being added", this.state.task);
    };

    render() {
        console.log("Rendering form....");
        return (
            <div>
                <form onSubmit = {this.submitTask}>
                    <input 
                        type = 'text'
                        value = {this.state.task}
                        name = 'task'
                        onChange = {this.handleChanges}
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default ToDoForm;