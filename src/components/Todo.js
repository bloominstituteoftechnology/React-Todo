import React from 'react'

class Todo extends React.Component {
    click = () => {
        this.props.handleToggle(this.props.todo.id)
    }
    render() {
        console.log(this.props)
        return(
            <div style={{ textDecoration: `${this.props.todo.completed ? 'line-through' : 'none'}` }} onClick={this.click}>
                <h3>{this.props.todo.task}</h3>
            </div>
        )
    }
}

export default Todo