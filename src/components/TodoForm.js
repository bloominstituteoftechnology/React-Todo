import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoText : ""
        }
    }

    handleChanges = e => {
        this.setState({
            todoText : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.todoText)
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <label htmlFor="add-todo">Add a Todo: </label>
                <input
                    name="add-todo"
                    type="text"
                    onChange={this.handleChanges} />
                <button>Add</button>
            </form>
        )
    }
}
