import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            newTaskText: ""
        }
    }

    handleChanges = e => {
        e.preventDefault()
        this.setState({ newTaskText: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.newTaskText) {
            this.props.addTask(this.state.newTaskText)
        }
        this.setState({ newTaskText: "" })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="task"
                    value={this.state.newTaskText}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;