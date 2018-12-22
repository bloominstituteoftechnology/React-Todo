import React from 'react';


class Todo extends React.Component {
    handleClick = () => {
        this.props.todoChange(this.props.id);
    }
    render() {
        return (
            <ul style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
        }} onClick={this.handleClick}>{this.props.task}</ul>

        )
    }
}

export default Todo;