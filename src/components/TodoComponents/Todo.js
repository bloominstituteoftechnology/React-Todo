import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <h4>{this.props.task}</h4>
        )
    }
}

export default Todo;