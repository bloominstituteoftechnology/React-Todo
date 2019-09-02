import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleChanges = e => {
        this.setState({
            task: e.target.value
        })
    }

    submitTask = e => {
        e.preventDefault()
        this.props.addTask(this.state.task)
        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input
                    type='text'
                    value={this.state.task}
                    name='task'
                    onChange={this.handleChanges}
                />
                <input 
                    type='submit'
                    value='Add Todo'
                />
                <button onClick={this.props.clearFinished}>
                    Clear Completed
                </button>
            </form>
        )
    }
}

export default TodoForm