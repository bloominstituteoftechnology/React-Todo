import React from 'react';

class Todo extends React.Component {
    render() {
        let style = this.props.completed ? {
            textDecoration: "line-through"
        } : {
            textDecoration: "initial"
        }
        return (
            <p style={style}>
                {this.props.task}
            </p>
        )
    }
}

export default Todo;