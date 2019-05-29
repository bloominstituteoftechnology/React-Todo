import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <p key={this.props.id}>
                {this.props.task}
            </p>
        )
    }
}

export default Todo;