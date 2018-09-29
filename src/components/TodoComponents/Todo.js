import React from 'react'

class Todo extends React.Component {
    render() {
        return (
        <div key={this.props.todo.id} onClick={() => this.props.toggleCompleted(this.props.todo.id)} style={{textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'}}>
            This is the {this.props.todo.task} task for {this.props.todo.id} date is completed?: {this.props.todo.isCompleted.toString()}.
        </div>
        )
    }
}

export default Todo