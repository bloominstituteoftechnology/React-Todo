import React from 'react';
import './Todo.css';
class Todo extends React.Component {
    render() {
        let style = this.props.completed ? {
            textDecoration: "line-through"
        } : {
            textDecoration: "initial"
        }
        return (
            <p className="todo" style={style} id={this.props.id} onClick={this.props.completeTask}>
                {this.props.task}
            </p>
        )
    }
}

export default Todo;