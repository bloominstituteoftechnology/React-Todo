import React, { Component } from 'react'

export class TodoForm extends Component {

    render() {
        return (
            <div>
                <input type='text' placeholder="Input todo list"/>
                <button>Add Todo</button>
            </div>
        )
    }
}

export default TodoForm
