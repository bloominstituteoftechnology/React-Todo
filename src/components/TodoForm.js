import React from 'react';

class TodoForm extends React.Component {
    constructor () {
        super()
        this.state = {
            input: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleAdd = () => {
        this.setState({
            input: ''
        })
        this.props.Add({
            task: this.state.input,
            id: Date.now().toString(),
            completed: false
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.input}></input>
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={event => this.props.Completed()}>Remove Completed</button>
            </div>
        )
    }
}

export default TodoForm;