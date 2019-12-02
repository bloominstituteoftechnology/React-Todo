import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            title: ''
        }
    }

    handleChanges = e => {
        this.setState({newTask: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask);
    };

    // onResetClick = e => {
    //     e.preventDefault();
    //     this.setState(this.state.newTask);
    // }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.newTask} 
                onChange={this.handleChanges} 
                type="text" 
                name="task"
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;