import React from 'react'
import './Todo.css'

class Todo extends React.Component {
    toggle = () => {
        this.props.handleToggle(this.props.item.name)
    }
    render() {
        return (
            <div onClick={this.toggle} className={this.props.item.complete ? 'completed' : ''}>{this.props.item.name}</div>
        )
    }
}
export default Todo