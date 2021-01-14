import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskName: ''
        }
    }
    handleChange = e => {
        this.setState({ taskName: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskName);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} 
                value={this.state.taskName} type='text' name='task' />
                <button>add</button>
            </form>
        )
    }
}

export default TodoForm;