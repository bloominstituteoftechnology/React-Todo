import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            input: ''
        }
    }

    onChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.input)
        this.setState({input: ''})
    }

    onClear = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.handleClear()
    }

    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <label>
                <input
                type="text"
                name="input"
                value={this.state.input}
                onChange={this.onChange}
                />
            </label>
            <button>Add Todo</button>
            <button onClick={this.onClear}>Clear Completed</button>
        </form>
        )
    }
}

export default TodoForm