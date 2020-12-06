import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor() {
        super();
    }

    handleClick = () => {
        this.props.handleToggleItem(this.props.taskItem.id)
    }

    render() {
        return (
            <div className='main'>
            <div onClick={this.handleClick} className={`task${this.props.taskItem.completed ? ' completed' : ''}`}>
                <p>{this.props.taskItem.task}</p>
            </div>
            </div>
        )
    }
}

export default Todo;