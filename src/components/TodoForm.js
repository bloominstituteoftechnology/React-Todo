import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitTodo = event => {
        event.preventDefault();
        this.setState({ todo: '' })
        this.props.addTodo(event, this.state.todo)
    }

    render() {
        console.log('rendering the form')
        return(
            <form onSubmit={this.submitTodo}>
                <input
                    type='text'
                    value={this.state.todo}
                    name='todo'
                    onChange={this.handleChanges}
                />
                <button>Add to List</button>
            </form>
        )
    }
}
export default TodoForm;