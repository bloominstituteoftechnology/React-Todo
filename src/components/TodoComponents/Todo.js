import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <p>{this.props.item}</p>
        )
    }
}

export default Todo
