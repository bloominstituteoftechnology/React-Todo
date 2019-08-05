import React from 'react';


class Todo extends React.Component {
    render() {
        return (
            <ul>{this.props.task}</ul>
        )
    }
}

export default Todo;