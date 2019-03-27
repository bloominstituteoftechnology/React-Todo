import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <li>
                {this.props.todo}
            </li>
        )
    }
}

export default Todo; 