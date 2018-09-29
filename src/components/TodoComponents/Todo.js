import React from 'react'

class Todo extends React.Component {
    render() {
        return (
        <div class="todo-list-item" key={this.props.todo.id} onClick={() => this.props.toggleCompleted(this.props.todo.id)} style={{textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'}}>
            <p>{this.props.todo.task}</p>
            {/* <p>Task: {this.props.todo.task}, Date: {this.props.todo.id} Is Completed? {this.props.todo.isCompleted.toString()}.</p> */}
        </div>
        )
    }
}

export default Todo