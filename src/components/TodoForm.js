import React, { Component } from 'react'

export class TodoForm extends Component {
    constructor() {
        super()
        this.state = {
            todo:''
        }
    }

    onChange = (e) => {
        this.setState({todo: e.target.value})
    }

    formSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.todo)
        this.setState({todo:''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <input 
                    type="text" 
                    name="todo"
                    placeholder='Add todo'
                    value= {this.state.todo}
                    onChange={this.onChange}
                    />
                    <button>Add Todo</button>
                    <button onClick={this.props.clearTodos}>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm
