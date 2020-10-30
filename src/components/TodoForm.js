import React from 'react'

class TodoForm extends React.Component {
constructor() {
    super();
    this.state = {
        taskName: ""
    }
}

handleChange = e => {
    this.setState({
        taskName: e.target.value
    })
}

handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.taskName)
    this.setState({ taskName: ""})
}

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input 
            name="task"
            onChange={this.handleChange}
            value={this.state.taskName} 
            />
            <button>Add</button>
        </form>
    )
}
}

export default TodoForm